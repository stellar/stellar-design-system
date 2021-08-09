import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "../Tooltip";
import { Icon } from "../../icons";
import "./styles.scss";

enum TooltipPosition {
  bottom = "bottom",
  right = "right",
}

interface CopyTextComponent {
  tooltipPosition: typeof TooltipPosition;
}

interface CopyTextProps {
  textToCopy: string;
  showCopyIcon?: boolean;
  showTooltip?: boolean;
  doneLabel?: string;
  tooltipPosition?: TooltipPosition;
  title?: string;
  children: React.ReactElement | string;
}

export const CopyText: React.FC<CopyTextProps> & CopyTextComponent = ({
  textToCopy,
  showCopyIcon,
  showTooltip,
  doneLabel = "Copied",
  tooltipPosition = TooltipPosition.bottom,
  title = "Copy",
  children,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const handleCopyDone = () => {
    if (isTooltipVisible) {
      return;
    }

    setIsTooltipVisible(true);

    const t = setTimeout(() => {
      setIsTooltipVisible(false);
      clearTimeout(t);
    }, 1000);
  };

  const renderElement = (element: React.ReactElement | string) => {
    const label = !showTooltip && isTooltipVisible ? doneLabel : null;

    if (typeof element === "string") {
      return label ?? element;
    }

    return (
      <element.type {...element.props}>
        {label ?? element.props.children}
      </element.type>
    );
  };

  return (
    <div className="CopyText">
      <CopyToClipboard text={textToCopy} onCopy={handleCopyDone}>
        <div title={title} role="button" className="CopyText__content">
          {renderElement(children)}

          {showCopyIcon ? (
            <div className="CopyText__content__copy-icon">
              <Icon.Copy />
            </div>
          ) : null}
        </div>
      </CopyToClipboard>

      {showTooltip ? (
        <Tooltip
          className={`CopyText__tooltip CopyText__tooltip--${tooltipPosition}`}
          isVisible={isTooltipVisible}
        >
          {doneLabel}
        </Tooltip>
      ) : null}
    </div>
  );
};

CopyText.displayName = "CopyText";
CopyText.tooltipPosition = TooltipPosition;
