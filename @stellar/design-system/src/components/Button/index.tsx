import React from "react";
import "./styles.scss";

enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

enum ButtonIconPosition {
  left = "left",
  right = "right",
}

interface ButtonComponent {
  variant: typeof ButtonVariant;
}

interface ButtonIconProps {
  position: ButtonIconPosition;
  children: React.ReactNode;
}

const ButtonIcon = ({ position, children }: ButtonIconProps) => (
  <span className={`ButtonIcon ButtonIcon--${position}`}>{children}</span>
);

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
      <ButtonIcon position={ButtonIconPosition.left}>{iconLeft}</ButtonIcon>
    ) : null}
    {children}
    {iconRight ? (
      <ButtonIcon position={ButtonIconPosition.right}>{iconRight}</ButtonIcon>
    ) : null}
  </button>
);

Button.variant = ButtonVariant;
