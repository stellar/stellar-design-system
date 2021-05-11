import React from "react";
import { ButtonIcon } from "../basic/ButtonIcon";
import "./styles.scss";

enum TextButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

interface TextButtonComponent {
  variant: typeof TextButtonVariant;
}

interface TextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: TextButtonVariant;
  children: string | React.ReactNode;
}

export const TextButton: React.FC<TextButtonProps> & TextButtonComponent = ({
  iconLeft,
  iconRight,
  variant = TextButtonVariant.primary,
  children,
  ...props
}) => (
  <button className={`TextButton TextButton--${variant}`} {...props}>
    {iconLeft ? (
      <ButtonIcon position={ButtonIcon.position.left}>{iconLeft}</ButtonIcon>
    ) : null}
    {children}
    {iconRight ? (
      <ButtonIcon position={ButtonIcon.position.right}>{iconRight}</ButtonIcon>
    ) : null}
  </button>
);

TextButton.variant = TextButtonVariant;
