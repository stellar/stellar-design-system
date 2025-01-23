import { useState } from "react";
import { Floater } from "../Floater";
import "./styles.scss";

/** */
export interface TooltipProps {
  /** Element that shows or hides tooltip */
  triggerEl: JSX.Element;
  /** Tooltip title */
  title?: React.ReactNode;
  /** Content of the tooltip */
  children?: React.ReactNode;
  /** Placement of tooltip relative to the trigger element @defaultValue `right` */
  placement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end";
  /** Manually show or hide tooltip */
  isVisible?: boolean;
  /** Use contrast theme color @defaultValue `true` */
  isContrast?: boolean;
}

/**
 * `Tooltip` is used to display info in a bubble. We are using [Floating UI](https://floating-ui.com/) for tooltip positioning.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  triggerEl,
  title,
  children,
  placement = "right",
  isVisible,
  isContrast = true,
}: TooltipProps) => {
  const [theme, setTheme] = useState("sds-theme-dark");

  const getContrastMode = () =>
    theme === "sds-theme-dark" ? "sds-theme-light" : "sds-theme-dark";

  return (
    <Floater
      placement={placement}
      triggerEl={triggerEl}
      isVisible={isVisible}
      isContrast={isContrast}
      showArrow={true}
      callback={(isOpen) => {
        if (isOpen) {
          const theme = document.body.getAttribute("data-sds-theme");

          if (theme) {
            setTheme(theme);
          }
        }
      }}
    >
      <div className={`Tooltip ${isContrast ? getContrastMode() : ""}`}>
        {title ? <div className="Tooltip__title">{title}</div> : null}
        {children ? <div className="Tooltip__message">{children}</div> : null}
      </div>
    </Floater>
  );
};

Tooltip.displayName = "Tooltip";
