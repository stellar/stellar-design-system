import React from "react";
import "./styles.scss";

enum TagVariant {
  default = "default",
  error = "error",
  success = "success",
  warning = "warning",
  highlight = "highlight",
}

interface TagComponent {
  variant: typeof TagVariant;
}

interface TagProps {
  variant?: TagVariant;
  children: string;
}

export const Tag: React.FC<TagProps> & TagComponent = ({
  variant = TagVariant.default,
  children,
}) => <div className={`Tag Tag--${variant}`}>{children}</div>;

Tag.displayName = "Tag";
Tag.variant = TagVariant;
