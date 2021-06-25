import React from "react";
import { Loader } from "../Loader";
import { ButtonIcon } from "../utils/ButtonIcon";
import "./styles.scss";

enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
}

interface ButtonComponent {
  variant: typeof ButtonVariant;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  isLoading?: Boolean;
  children: string | React.ReactNode;
}

export const Button: React.FC<ButtonProps> & ButtonComponent = ({
  iconLeft,
  iconRight,
  variant = ButtonVariant.primary,
  isLoading,
  children,
  ...props
}) => (
  <button
    className={`Button Button--${variant}`}
    {...props}
    {...(isLoading ? { disabled: true } : {})}
  >
    {iconLeft ? (
      <ButtonIcon position={ButtonIcon.position.left}>{iconLeft}</ButtonIcon>
    ) : null}
    {children}
    {iconRight ? (
      <ButtonIcon position={ButtonIcon.position.right}>{iconRight}</ButtonIcon>
    ) : null}
    {isLoading ? <Loader /> : null}
  </button>
);

Button.displayName = "Button";
Button.variant = ButtonVariant;
