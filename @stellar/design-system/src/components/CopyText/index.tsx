import React, { cloneElement, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Tooltip } from "../Tooltip";
import "./styles.scss";

/** */
export type CopyTextBaseProps = {
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
};

export type CopyTextEllipsisProps = {
  /** Component display variant. `ellipsis` parent must have position relative. */
  variant?: "ellipsis";
  /** Copy click element */
  children: string;
};

export type CopyTextVariantProps = {
  /** Component display variant. `headless` parent must have position relative. @defaultValue `inline` */
  variant?: "inline" | "headless";
  /** Copy click element */
  children: React.ReactElement;
};

/** */
export type CopyTextProps = (CopyTextVariantProps | CopyTextEllipsisProps) &
  CopyTextBaseProps;

/**
 * Use the `CopyText` component to copy a string. We’re using [react-copy-to-clipboard](https://github.com/nkbt/react-copy-to-clipboard) to handle the copy part.
 */
export const CopyText: React.FC<CopyTextProps> = ({
  textToCopy,
  variant = "inline",
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

  if (variant === "headless") {
    return (
      <Tooltip
        isVisible={isTooltipVisible}
        triggerEl={
          <CopyToClipboard text={textToCopy} onCopy={handleCopyDone}>
            {cloneElement(children as React.ReactElement, {
              title,
            })}
          </CopyToClipboard>
        }
        placement={tooltipPlacement}
      >
        {doneLabel}
      </Tooltip>
    );
  }

  if (variant === "ellipsis") {
    return (
      <div className={`CopyText CopyText--${variant}`}>
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
  }

  return (
    <div className={`CopyText CopyText--${variant}`}>
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
