import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "../Tooltip";
import { FloaterPlacement } from "../Floater";
import "./styles.scss";

interface CopyTextProps {
  textToCopy: string;
  doneLabel?: string;
  tooltipPlacement?: FloaterPlacement;
  title?: string;
  children: React.ReactElement | string;
}

export const CopyText: React.FC<CopyTextProps> = ({
  textToCopy,
  doneLabel = "Copied",
  tooltipPlacement = "bottom",
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

  return (
    <div className="CopyText">
      <Tooltip
        isVisible={isTooltipVisible}
        triggerEl={
          <CopyToClipboard text={textToCopy} onCopy={handleCopyDone}>
            <div title={title} role="button" className="CopyText__content">
              {children}
            </div>
          </CopyToClipboard>
        }
        placement={tooltipPlacement}
      >
        {doneLabel}
      </Tooltip>
    </div>
  );
};

CopyText.displayName = "CopyText";
