import React from "react";
import { Loader } from "../Loader";
import "./styles.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "tertiary";
  size: "md" | "sm" | "xs";
  children: string | React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  isUppercase?: boolean;
  isFullWidth?: boolean;
  isPill?: boolean;
}

export const Button = ({
  variant,
  size,
  children,
  icon,
  iconPosition = "right",
  isLoading,
  isUppercase,
  isFullWidth,
  isPill,
  ...props
}: ButtonProps): JSX.Element => {
  const additionalClasses = [
    `Button--${variant}`,
    `Button--${size}`,
    ...(isUppercase ? [`Button--uppercase`] : []),
    ...(isFullWidth ? [`Button--full-width`] : []),
    ...(isPill ? [`Button--pill`] : []),
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
      {children}
      {renderIcon("right")}
    </button>
  );
};

Button.displayName = "Button";
