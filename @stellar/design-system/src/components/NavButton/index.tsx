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

export const NavButton = ({
  id,
  title,
  onClick,
  icon,
  disabled,
  showBorder,
}: NavButtonProps) => (
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
