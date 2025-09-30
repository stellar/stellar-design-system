import React from "react";
import "./styles.scss";

/** */
export interface NavButtonProps {
  /** ID of the component (should be unique) */
  id?: string;
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
 * `NavButton` triggers actions like toggling dark and light mode, closing a modal, and toggling side navigation.
 */
export const NavButton = ({
  id,
  title,
  onClick,
  icon,
  disabled,
  showBorder,
}: NavButtonProps): JSX.Element => (
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
