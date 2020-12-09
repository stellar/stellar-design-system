import React from "react";
import "./styles.scss";

export enum TextButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  variant?: TextButtonVariant;
  children: string;
}

export const TextButton: React.FC<TextButtonProps> = ({
  icon,
  variant = TextButtonVariant.primary,
  children,
  ...props
}) => (
  <button className="TextButton" data-variant={variant} {...props}>
    {icon && <span className="TextButtonIcon">{icon}</span>}
    {children}
  </button>
);
