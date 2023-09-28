import { Floater } from "../Floater";
import "./styles.scss";

/** */
export interface TooltipProps {
  /** Element that shows/hides tooltip */
  triggerEl: JSX.Element;
  /** Content of the tooltip */
  children: React.ReactNode;
  /** Placement of tooltip relative to trigger element @defaultValue `right` */
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
  /** Manually show/hide tooltip */
  isVisible?: boolean;
  /** Use contrast theme color @defaultValue `true` */
  isContrast?: boolean;
}

/**
 * Tooltip is used to display info in a bubble. We are using [Floating UI](https://floating-ui.com/) for tooltip positioning.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  triggerEl,
  children,
  placement = "right",
  isVisible,
  isContrast = true,
}: TooltipProps) => {
  return (
    <Floater
      placement={placement}
      triggerEl={triggerEl}
      isVisible={isVisible}
      isContrast={isContrast}
    >
      <div className="Tooltip">{children}</div>
    </Floater>
  );
};

Tooltip.displayName = "Tooltip";
