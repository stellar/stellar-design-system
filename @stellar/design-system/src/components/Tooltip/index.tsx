import { Floater, FloaterPlacement } from "../Floater";
import "./styles.scss";

interface TooltipProps {
  triggerEl: JSX.Element;
  children: React.ReactNode;
  placement?: FloaterPlacement;
  isVisible?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  triggerEl,
  children,
  placement = "right",
  isVisible,
}: TooltipProps) => {
  return (
    <Floater placement={placement} triggerEl={triggerEl} isVisible={isVisible}>
      <div className="Tooltip">{children}</div>
    </Floater>
  );
};

Tooltip.displayName = "Tooltip";
