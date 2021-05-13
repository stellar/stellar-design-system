import React from "react";
import "./styles.scss";

enum ButtonIconPosition {
  left = "left",
  right = "right",
}

interface ButtonIconComponent {
  position: typeof ButtonIconPosition;
}

interface ButtonIconProps {
  position: ButtonIconPosition;
  children: React.ReactNode;
}

export const ButtonIcon: React.FC<ButtonIconProps> & ButtonIconComponent = ({
  position,
  children,
}: ButtonIconProps) => (
  <span className={`ButtonIcon ButtonIcon--${position}`}>{children}</span>
);

ButtonIcon.position = ButtonIconPosition;
