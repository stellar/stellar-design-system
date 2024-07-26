import React, { useEffect, useState } from "react";
import { FloaterPlacement } from "../Floater";
import { Loader } from "../Loader";
import { Tooltip } from "../Tooltip";
import "./styles.scss";

/**
 * Including all valid [button attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes).
 */
export interface ButtonProps {
  /** Variant of the button */
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "destructive"
    | "error"
    | "success";
  /** Size of the button */
  size: "sm" | "md" | "lg";
  /** Label of the button */
  children?: string | React.ReactNode;
  /** Icon element */
  icon?: React.ReactNode;
  /** Position of the icon @defaultValue `right` */
  iconPosition?: "left" | "right";
  /** Loading state indicator */
  isLoading?: boolean;
  /** Sets width of the button to match the parent container */
  isFullWidth?: boolean;
  /** Show onClick action tooltip @defaultValue `false` */
  showActionTooltip?: boolean;
  /** Action tooltip text @defaultValue `Done` */
  actionTooltipText?: string;
  /** Action tooltip placement @defaultValue `bottom` */
  actionTooltipPlacement?: FloaterPlacement;
}

interface Props
  extends ButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * `Button` is used to trigger an action that is not opening a link (to trigger an action that opens a link, use {@link Link}
 * instead).
 */
export const Button: React.FC<Props> = ({
  variant,
  size,
  children,
  icon,
  iconPosition = "right",
  isLoading,
  isFullWidth,
  showActionTooltip = false,
  actionTooltipText = "Done",
  actionTooltipPlacement = "bottom",
  ...props
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  useEffect(() => {
    if (isTooltipVisible) {
      const t = setTimeout(() => {
        setIsTooltipVisible(false);
        clearTimeout(t);
      }, 1000);
    }
  }, [isTooltipVisible]);

  const additionalClasses = [
    `Button--${variant}`,
    `Button--${size}`,
    ...(isFullWidth ? [`Button--full-width`] : []),
  ].join(" ");

  const renderIcon = (position: "left" | "right") => {
    // By default, show loader on the right side
    if (!icon && isLoading && position === "right") {
      return <Loader />;
    }

    // If there is icon, replace icon with loader
    if (icon && iconPosition === position) {
      if (isLoading) {
        return <Loader />;
      }

      return <span className="Button__icon">{icon}</span>;
    }

    return null;
  };

  const renderButton = () => {
    return (
      <button
        className={`Button ${additionalClasses}`}
        {...props}
        {...(isLoading ? { disabled: true } : {})}
        {...(props.onClick
          ? {
              onClick: (event) => {
                if (props.onClick) {
                  props.onClick(event);

                  if (showActionTooltip) {
                    setIsTooltipVisible(true);
                  }
                }
              },
            }
          : {})}
      >
        {renderIcon("left")}
        {children ?? null}
        {renderIcon("right")}
      </button>
    );
  };

  if (showActionTooltip) {
    return (
      <Tooltip
        triggerEl={renderButton()}
        isVisible={isTooltipVisible}
        placement={actionTooltipPlacement}
      >
        {actionTooltipText}
      </Tooltip>
    );
  }

  return renderButton();
};

Button.displayName = "Button";
