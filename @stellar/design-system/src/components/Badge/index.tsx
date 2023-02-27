import React from "react";
import "./styles.scss";

interface BadgeProps {
  variant?: "default" | "success" | "warning" | "pending" | "error";
  children: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  children,
}) => <div className={`Badge Badge--${variant}`}>{children}</div>;

Badge.displayName = "Tag";
