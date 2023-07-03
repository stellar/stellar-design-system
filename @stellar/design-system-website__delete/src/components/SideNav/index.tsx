import { useLayoutEffect, createRef, useState } from "react";
import { NavButton, Icon } from "@stellar/design-system";
import { debounce } from "lodash";
import { componentsInDisplayOrder } from "constants/componentsInDisplayOrder";
import {
  CSS_CLASS_LAYOUT_CONTAINER,
  BREAKPOINT_SMALL,
} from "constants/variables";
import "./styles.scss";

interface SideNavProps {
  activeItemId: string;
  onClick: (id: string) => void;
  onClose: () => void;
}

export const SideNav = ({ activeItemId, onClick, onClose }: SideNavProps) => {
  const sideNavRef = createRef<HTMLDivElement>();

  const [containerOffsetTop, setContainerOffsetTop] = useState<
    number | undefined
  >();
  const [isSideNavFixed, setIsSideNavFixed] = useState(false);

  const scrollHandler = debounce(() => {
    if (!containerOffsetTop) {
      return;
    }

    window.requestAnimationFrame(() => {
      const isLargeScreen = window.matchMedia(
        `(min-width: ${BREAKPOINT_SMALL}px)`,
      );
      const isFixed =
        isLargeScreen.matches && window.pageYOffset >= containerOffsetTop;

      setIsSideNavFixed(isFixed);
    });
  }, 50);

  // Get and set offset top of the layout container
  useLayoutEffect(() => {
    if (sideNavRef?.current) {
      const offsetTop = (
        sideNavRef?.current?.closest(
          `.${CSS_CLASS_LAYOUT_CONTAINER}`,
        ) as HTMLDivElement
      )?.offsetTop;
      setContainerOffsetTop(offsetTop || 0);
    }
  }, [sideNavRef]);

  // Handle scroll
  useLayoutEffect(() => {
    window.addEventListener("scroll", scrollHandler, true);

    return () => {
      window.removeEventListener("scroll", scrollHandler, true);
    };
  }, [scrollHandler]);

  const handleClick = (itemId: string) => {
    onClick(itemId);
    onClose();
  };

  return (
    <div
      className={`SideNav ${isSideNavFixed ? "SideNav--fixed" : ""}`}
      ref={sideNavRef}
    >
      <div className="SideNav__content">
        {componentsInDisplayOrder.map((item) => {
          const isActive = activeItemId === item.id;

          return (
            <div
              key={`sideNav-${item.id}`}
              role="button"
              className={`SideNav__item ${
                isActive ? "SideNav__item--active" : ""
              }`}
              {...(isActive ? {} : { onClick: () => handleClick(item.id) })}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="SideNav__close">
        <NavButton
          id="side-nav-close"
          title="Close side navigation"
          onClick={onClose}
          icon={<Icon.Close />}
        />
      </div>
    </div>
  );
};
