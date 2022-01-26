import React from "react";
import { Loader } from "../Loader";
import { ButtonIcon } from "../utils/ButtonIcon";
import "./styles.scss";

enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

enum ButtonSize {
  default = "default",
  small = "small",
}

interface ButtonComponent {
  variant: typeof ButtonVariant;
  size: typeof ButtonSize;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  isLoading?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: string | React.ReactNode;
}

export const Button: React.FC<ButtonProps> & ButtonComponent = ({
  iconLeft,
  iconRight,
  variant = ButtonVariant.primary,
  isLoading,
  size = ButtonSize.default,
  fullWidth,
  children,
  ...props
}) => {
  const additionalClasses = [
    `Button--${variant}`,
    ...(size !== ButtonSize.default ? [`Button--${size}`] : []),
    ...(fullWidth ? [`Button--full-width`] : []),
  ].join(" ");

  return (
    <button
      className={`Button ${additionalClasses}`}
      {...props}
      {...(isLoading ? { disabled: true } : {})}
    >
      {iconLeft ? (
        <ButtonIcon position={ButtonIcon.position.left}>{iconLeft}</ButtonIcon>
      ) : null}
      {children}
      {iconRight ? (
        <ButtonIcon position={ButtonIcon.position.right}>
          {iconRight}
        </ButtonIcon>
      ) : null}
      {isLoading ? <Loader /> : null}
    </button>
  );
};

Button.displayName = "Button";
Button.variant = ButtonVariant;
Button.size = ButtonSize;
