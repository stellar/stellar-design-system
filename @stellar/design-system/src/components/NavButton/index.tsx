import React from "react";
import "./styles.scss";

interface NavButtonProps {
  id: string;
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
  disabled?: boolean;
  showBorder?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  id,
  title,
  onClick,
  icon,
  disabled,
  showBorder,
}) => (
  <button
    id={id}
    className={`NavButton ${showBorder ? "NavButton--border" : ""}`}
    title={title}
    onClick={onClick}
    disabled={disabled}
  >
    {icon}
  </button>
);

NavButton.displayName = "NavButton";
