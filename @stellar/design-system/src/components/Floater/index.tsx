import {
  useCallback,
  useLayoutEffect,
  useState,
  cloneElement,
  useRef,
} from "react";
import {
  computePosition,
  flip,
  offset as floatingOffset,
  shift,
  arrow,
  Placement,
} from "@floating-ui/dom";

import { ReactComponent as ArrowIcon } from "./arrow.svg";
import "./styles.scss";

export type FloaterPlacement = Placement;

interface FloaterProps {
  triggerEl: JSX.Element;
  children: JSX.Element | JSX.Element[];
  placement: FloaterPlacement;
  isVisible?: boolean;
  offset?: number;
  padding?: number;
  hasActiveInsideClick?: boolean;
  isContrast?: boolean;
  showArrow?: boolean;
  callback?: (isOpen: boolean) => void;
}

// Might need to flip the placement to get the correct arrow style
const getActualTooltipPlacement = (
  placement: Placement,
  floaterX: number,
  floaterY: number,
) => {
  if (placement.includes("bottom") && floaterY < 0) {
    return placement.replace("bottom", "top") as Placement;
  }

  if (placement.includes("top") && floaterY > 0) {
    return placement.replace("top", "bottom") as Placement;
  }

  if (placement.includes("left") && floaterX > 0) {
    return placement.replace("left", "right") as Placement;
  }

  if (placement.includes("right") && floaterX < 0) {
    return placement.replace("right", "left") as Placement;
  }

  return placement;
};

const getArrowStyle = ({
  x,
  y,
  placement,
  floaterX,
  floaterY,
}: {
  x?: number;
  y?: number;
  placement: FloaterPlacement;
  floaterX?: number;
  floaterY?: number;
}) => {
  const basePos = { top: "auto", bottom: "auto", left: "auto", right: "auto" };

  const actualPlacement = getActualTooltipPlacement(
    placement,
    floaterX || 0,
    floaterY || 0,
  );

  switch (actualPlacement) {
    case "top":
      return { ...basePos, right: `${x}px`, transform: "rotate(180deg)" };
    case "top-start":
      return { ...basePos, transform: "rotate(180deg)" };
    case "top-end":
      return { ...basePos, right: "0px", transform: "rotate(180deg)" };
    case "bottom":
      return {
        ...basePos,
        top: "-12px",
        right: `${x}px`,
        transform: "rotate(0deg)",
      };
    case "bottom-start":
      return { ...basePos, top: "-12px", transform: "rotate(0deg)" };
    case "bottom-end":
      return {
        ...basePos,
        top: "-12px",
        right: `0px`,
        transform: "rotate(0deg)",
      };
    case "left":
    case "left-start":
    case "left-end":
      return {
        ...basePos,
        right: `-26px`,
        top: `${y}px`,
        transform: "rotate(90deg)",
      };
    case "right":
    case "right-start":
    case "right-end":
      return {
        ...basePos,
        left: `-26px`,
        top: `${y}px`,
        transform: "rotate(270deg)",
      };
    default:
      return basePos;
  }
};

export const Floater = ({
  triggerEl,
  children,
  placement,
  isVisible,
  offset = 8,
  padding = 24,
  hasActiveInsideClick,
  isContrast = true,
  showArrow = false,
  callback,
}: FloaterProps): JSX.Element => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const floaterRef = useRef<HTMLDivElement | null>(null);
  const floaterArrowRef = useRef<HTMLDivElement | null>(null);

  const [isFloaterOpen, setIsFloaterOpen] = useState(Boolean(isVisible));
  // If components has manual visibility control, we don't want to add clicks
  const isStatic = isVisible !== undefined;

  const triggerClass = "trigger";
  const triggerActiveClass = "trigger--active";
  const delay = 150;

  const openFloater = useCallback(() => {
    const computeFloaterPosition = async () => {
      const arrowEl = showArrow && floaterArrowRef?.current;

      if (parentRef?.current && floaterRef?.current) {
        const { x, y, middlewareData } = await computePosition(
          parentRef.current,
          floaterRef.current,
          {
            placement,
            middleware: [
              floatingOffset(arrowEl ? Number(offset + 6) : offset),
              flip(),
              shift({ padding }),
              arrowEl && arrow({ element: arrowEl, padding: 5 }),
            ],
          },
        );

        if (floaterRef.current?.style) {
          Object.assign(floaterRef.current.style, {
            left: `${x}px`,
            top: `${y}px`,
            transform: "translateX(0)",
          });
        }
        if (arrowEl && middlewareData.arrow) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow;

          Object.assign(
            arrowEl.style,
            getArrowStyle({
              x: arrowX,
              y: arrowY,
              placement,
              floaterX: x,
              floaterY: y,
            }),
          );
        }
      }
    };

    parentRef.current?.classList.add(triggerClass);
    computeFloaterPosition();

    const t = setTimeout(() => {
      if (parentRef.current?.classList.contains(triggerClass)) {
        parentRef.current?.classList.add(triggerActiveClass);
        clearTimeout(t);

        setIsFloaterOpen(true);
      }
    }, delay);
  }, [offset, padding, placement, showArrow]);

  const closeFloater = useCallback(() => {
    parentRef.current?.classList.remove(triggerActiveClass);
    const t = setTimeout(() => {
      parentRef.current?.classList.remove(triggerClass);
      clearTimeout(t);

      setIsFloaterOpen(false);
    }, delay);
  }, []);

  const toggleFloater = useCallback(
    (isOpen: boolean) => {
      if (isOpen) {
        openFloater();
      } else {
        closeFloater();
      }

      if (callback) {
        callback(isOpen);
      }
    },
    [callback, openFloater, closeFloater],
  );

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      // Do nothing if component is static or floater element is clicked, unless
      // hasActiveInsideClick prop is set
      if (
        isStatic ||
        (floaterRef?.current?.contains(event.target as Node) &&
          !hasActiveInsideClick)
      ) {
        return;
      }

      toggleFloater(false);
    },
    [hasActiveInsideClick, isStatic, toggleFloater],
  );

  useLayoutEffect(() => {
    // Update only if isVisible is set on the component
    if (isVisible !== undefined) {
      toggleFloater(isVisible);
    }
  }, [isVisible, toggleFloater]);

  useLayoutEffect(() => {
    if (isFloaterOpen) {
      document.addEventListener("pointerup", handleClickOutside);
    } else {
      document.removeEventListener("pointerup", handleClickOutside);
    }

    return () => {
      document.removeEventListener("pointerup", handleClickOutside);
    };
  }, [isFloaterOpen, handleClickOutside]);

  return (
    <div className="Floater" ref={parentRef}>
      <>
        {isStatic
          ? triggerEl
          : cloneElement(triggerEl, {
              // Add floater click action
              onClick: toggleFloater,
            })}
      </>
      <div
        ref={floaterRef}
        className="Floater__content"
        data-is-contrast={isContrast}
      >
        {children}
        {showArrow ? (
          <div className="Floater__arrow" ref={floaterArrowRef}>
            <ArrowIcon />
          </div>
        ) : null}
      </div>
    </div>
  );
};
