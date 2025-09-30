import React from "react";
import "./styles.scss";

/** */
export interface BadgeProps {
  /** Variant of the badge @defaultValue `primary` */
  variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "error";
  /** Size of the badge @defaultValue `sm` */
  size?: "sm" | "md" | "lg";
  /** Use outlined style */
  isOutlined?: boolean;
  /** Use square corners */
  isSquare?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
  /** Position of the icon @defaultValue `right` */
  iconPosition?: "left" | "right";
  /** Add dot icon on the left side */
  isStatus?: boolean;
  /** Label of the badge */
  children: string;
}

/**
 * `Badge` is used to label or categorize an item or show status. There are five variants: `primary`, `secondary`, `tertiary`, `success`, `warning`, and `error`.
 */
export const Badge = ({
  variant = "primary",
  size = "sm",
  isOutlined,
  isSquare,
  icon,
  iconPosition = "right",
  isStatus,
  children,
}: BadgeProps): JSX.Element => {
  const additionalClasses = [
    `Badge--${variant}`,
    `Badge--${size}`,
    ...(isOutlined ? [`Badge--outlined`] : []),
    ...(isSquare ? [`Badge--square`] : []),
  ].join(" ");

  const renderIcon = (position: "left" | "right") => {
    if (!isStatus && icon && iconPosition === position) {
      return <span className="Badge__icon">{icon}</span>;
    }

    return null;
  };

  return (
    <div className={`Badge ${additionalClasses}`}>
      {isStatus ? <div className="Badge__dot"></div> : null}
      {renderIcon("left")}
      {children}
      {renderIcon("right")}
    </div>
  );
};

Badge.displayName = "Badge";
