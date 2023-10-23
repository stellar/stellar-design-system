import React from "react";
import "./styles.scss";

/** */
export interface BadgeProps {
  /** Variant of the badge @defaultValue `default` */
  variant?: "default" | "success" | "warning" | "pending" | "error";
  /** Label of the badge */
  children: string;
}

/**
 * `Badge` is used to label or categorize an item. There are five variants: `default`, `success`, `warning`, `pending`, and `error`.
 */
export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
}) => <div className={`Badge Badge--${variant}`}>{children}</div>;

Badge.displayName = "Badge";
