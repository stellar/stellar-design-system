import React from "react";
import "./styles.scss";

export enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  children: string;
}

export const Button: React.FC<ButtonProps> = ({
  icon,
  variant = ButtonVariant.primary,
  children,
  ...props
}) => (
  <button className="Button" data-variant={variant} {...props}>
    {icon && <span className="ButtonIcon">{icon}</span>}
    {children}
  </button>
);
