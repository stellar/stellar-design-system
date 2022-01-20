import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPopper, preventOverflow, flip } from "@popperjs/core";
import { Icon } from "../../icons";
import "./styles.scss";

export enum TooltipPosition {
  BOTTOM = "bottom",
  BOTTOM_START = "bottom-start",
  BOTTOM_END = "bottom-end",
  LEFT = "left",
  LEFT_START = "left-start",
  LEFT_END = "left-end",
  RIGHT = "right",
  RIGHT_START = "right-start",
  RIGHT_END = "right-end",
  TOP = "top",
  TOP_START = "top-start",
  TOP_END = "top-end",
}

interface TooltipComponent {
  position: typeof TooltipPosition;
}

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: TooltipPosition;
  isVisible?: boolean;
  disableClick?: boolean;
}

export const Tooltip: React.FC<TooltipProps> & TooltipComponent = ({
  content,
  children,
  position = TooltipPosition.BOTTOM,
  isVisible,
  disableClick,
}) => {
  const tooltipEl = useRef<HTMLDivElement | null>(null);
  const referenceEl = useRef<HTMLDivElement | null>(null);

  const [isTooltipVisible, setIsTooltipVisible] = useState(Boolean(isVisible));

  const positionTooltip = useCallback(() => {
    if (referenceEl?.current && tooltipEl?.current) {
      createPopper(referenceEl?.current, tooltipEl.current, {
        placement: position,
        modifiers: [
          preventOverflow,
          flip,
          {
            name: "offset",
            options: {
              offset: [0, 16],
            },
          },
        ],
      });
    }
  }, [position, referenceEl]);

  useLayoutEffect(() => {
    positionTooltip();
  }, [positionTooltip]);

  useLayoutEffect(() => {
    // Update only if isVisible is set on the component
    if (isVisible !== undefined) {
      setIsTooltipVisible(isVisible);
    }
  }, [isVisible]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    // Do nothing if clicking tooltip itself or link inside the tooltip
    if (
      event.target === tooltipEl?.current ||
      tooltipEl?.current?.contains(event.target as Node)
    ) {
      return;
    }

    if (!referenceEl?.current?.contains(event.target as Node)) {
      setIsTooltipVisible(false);
    }
  }, []);

  useLayoutEffect(() => {
    if (!disableClick) {
      if (isTooltipVisible) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isTooltipVisible, handleClickOutside, disableClick]);

  return (
    <div className={`Tooltip ${isTooltipVisible ? "Tooltip--opened" : ""}`}>
      <div
        ref={referenceEl}
        className="Tooltip__component"
        onClick={() => !disableClick && setIsTooltipVisible(!isTooltipVisible)}
      >
        {children}
      </div>
      <div
        ref={tooltipEl}
        className="Tooltip__content"
        style={{ visibility: isTooltipVisible ? "visible" : "hidden" }}
      >
        <div className="Tooltip__content__container">{content}</div>
        <div data-popper-arrow className="Tooltip__content__arrow">
          <Icon.TooltipPoint />
        </div>
      </div>
    </div>
  );
};

Tooltip.displayName = "Tooltip";
Tooltip.position = TooltipPosition;
