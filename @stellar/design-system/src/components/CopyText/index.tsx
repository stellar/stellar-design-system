import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "../Tooltip";
import "./styles.scss";

/** */
export interface CopyTextProps {
  /** Text to copy */
  textToCopy: string;
  /** Label/text to display when copy action is done @defaultValue `Copied` */
  doneLabel?: string;
  /** Position of the tooltip @defaultValue `bottom` */
  tooltipPlacement?:
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
  /** Title text to show on hover @defaultValue `Copy` */
  title?: string;
  /** Copy click element */
  children: React.ReactElement;
}

/**
 * Use the `CopyText` component to copy a string. Done action label can be displayed in a tooltip, by default it will replace the component’s label inline. We’re using [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard) to handle the copy part.
 */
export const CopyText: React.FC<CopyTextProps> = ({
  textToCopy,
  doneLabel = "Copied",
  tooltipPlacement = "bottom",
  title = "Copy",
  children,
}: CopyTextProps) => {
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
