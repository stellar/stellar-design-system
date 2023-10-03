import React from "react";
import "./styles.scss";

/** */
export interface NavButtonProps {
  /** ID of the component should be unique */
  id: string;
  /** Title or label to show on hover */
  title: string;
  /** Action to trigger on click */
  onClick: () => void;
  /** Icon of the component */
  icon: React.ReactNode;
  /** Disable the component */
  disabled?: boolean;
  /** Show border around the component */
  showBorder?: boolean;
}

/**
 * `NavButton` is used to trigger actions like toggle dark and light mode, close a modal, and toggle side navigation.
 */
export const NavButton: React.FC<NavButtonProps> = ({
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
