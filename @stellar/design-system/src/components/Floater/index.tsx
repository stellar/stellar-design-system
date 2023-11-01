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
  Placement,
} from "@floating-ui/dom";
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
}

export const Floater: React.FC<FloaterProps> = ({
  triggerEl,
  children,
  placement,
  isVisible,
  offset = 8,
  padding = 24,
  hasActiveInsideClick,
  isContrast = true,
}: FloaterProps) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const floaterRef = useRef<HTMLDivElement | null>(null);

  const [isFloaterOpen, setIsFloaterOpen] = useState(Boolean(isVisible));
  // If components has manual visibility control, we don't want to add clicks
  const isStatic = isVisible !== undefined;

  const triggerClass = "trigger";
  const triggerActiveClass = "trigger--active";
  const delay = 150;

  const openFloater = useCallback(() => {
    const computeFloaterPosition = async () => {
      if (parentRef?.current && floaterRef?.current) {
        const { x, y } = await computePosition(
          parentRef.current,
          floaterRef.current,
          {
            placement,
            middleware: [floatingOffset(offset), flip(), shift({ padding })],
          },
        );

        Object.assign(floaterRef.current.style, {
          left: `${x}px`,
          top: `${y}px`,
          transform: "translateX(0)",
        });
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
  }, [offset, padding, placement]);

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
    },
    [openFloater, closeFloater],
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

  const additionalClasses = [
    ...(isContrast ? [] : [`Floater__content--light`]),
  ].join(" ");

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
      <div ref={floaterRef} className={`Floater__content ${additionalClasses}`}>
        {children}
      </div>
    </div>
  );
};
