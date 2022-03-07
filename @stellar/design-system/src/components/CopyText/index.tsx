import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip, TooltipPosition } from "../Tooltip";
import "./styles.scss";

interface CopyTextComponent {
  tooltipPosition: typeof TooltipPosition;
}

interface CopyTextProps {
  textToCopy: string;
  showTooltip?: boolean;
  doneLabel?: string;
  tooltipPosition?: TooltipPosition;
  title?: string;
  children: React.ReactElement | string;
}

export const CopyText: React.FC<CopyTextProps> & CopyTextComponent = ({
  textToCopy,
  showTooltip,
  doneLabel = "Copied",
  tooltipPosition = TooltipPosition.BOTTOM,
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
      <Tooltip
        content={doneLabel}
        position={tooltipPosition}
        isVisible={showTooltip && isTooltipVisible}
        disableClick
      >
        <CopyToClipboard text={textToCopy} onCopy={handleCopyDone}>
          <div title={title} role="button" className="CopyText__content">
            {renderElement(children)}
          </div>
        </CopyToClipboard>
      </Tooltip>
    </div>
  );
};

CopyText.displayName = "CopyText";
CopyText.tooltipPosition = TooltipPosition;
