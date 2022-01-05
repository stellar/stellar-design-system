import { Tooltip, TooltipPosition } from "../Tooltip";
import { IconButton } from "../IconButton";
import { Icon } from "../../icons";

import "./styles.scss";

interface DetailsTooltipComponent {
  tooltipPosition: typeof TooltipPosition;
}

interface DetailsTooltipProps {
  details: React.ReactNode;
  children: React.ReactElement;
  isInline?: boolean;
  altText?: string;
  tooltipPosition?: TooltipPosition;
  customIcon?: React.ReactNode;
  customColor?: string;
  customSize?: string;
}

export const DetailsTooltip: React.FC<DetailsTooltipProps> &
  DetailsTooltipComponent = ({
  details,
  children,
  isInline,
  altText = "Learn more",
  tooltipPosition = TooltipPosition.RIGHT,
  customIcon = <Icon.Info />,
  customColor,
  customSize,
}) => {
  const getExtraClasses = () => {
    const classes: string[] = [];

    if (isInline) {
      classes.push("DetailsTooltip--inline");
    }

    return classes.join(" ");
  };

  return (
    <div className={`DetailsTooltip ${getExtraClasses()}`}>
      <div className="DetailsTooltip__component">{children}</div>
      <div className="DetailsTooltip__button">
        <Tooltip content={details} position={tooltipPosition}>
          <IconButton
            altText={altText}
            icon={customIcon}
            customSize={customSize}
            customColor={customColor}
          />
        </Tooltip>
      </div>
    </div>
  );
};

DetailsTooltip.displayName = "DetailsTooltip";
DetailsTooltip.tooltipPosition = TooltipPosition;
