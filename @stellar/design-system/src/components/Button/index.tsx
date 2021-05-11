import React from "react";
import { ButtonIcon } from "../basic/ButtonIcon";
import "./styles.scss";

enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonComponent {
  variant: typeof ButtonVariant;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: ButtonVariant;
  children: string;
}

export const Button: React.FC<ButtonProps> & ButtonComponent = ({
  iconLeft,
  iconRight,
  variant = ButtonVariant.primary,
  children,
  ...props
}) => (
  <button className={`Button Button--${variant}`} {...props}>
    {iconLeft ? (
      <ButtonIcon position={ButtonIcon.position.left}>{iconLeft}</ButtonIcon>
    ) : null}
    {children}
    {iconRight ? (
      <ButtonIcon position={ButtonIcon.position.right}>{iconRight}</ButtonIcon>
    ) : null}
  </button>
);

Button.variant = ButtonVariant;
