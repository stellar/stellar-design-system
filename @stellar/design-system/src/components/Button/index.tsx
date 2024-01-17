import React from "react";
import { Loader } from "../Loader";
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
  ...props
}) => {
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

  return (
    <button
      className={`Button ${additionalClasses}`}
      {...props}
      {...(isLoading ? { disabled: true } : {})}
    >
      {renderIcon("left")}
      {children ?? null}
      {renderIcon("right")}
    </button>
  );
};

Button.displayName = "Button";
