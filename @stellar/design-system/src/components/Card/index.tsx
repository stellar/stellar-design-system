import React from "react";
import "./styles.scss";

/** */
export interface CardProps {
  /** Card content */
  children: React.ReactNode;
  /** Variant of the card @defaultValue `primary` */
  variant?: "primary" | "secondary";
  /** Remove card padding */
  noPadding?: boolean;
  /** Card border radius @defaultValue `md` */
  borderRadiusSize?: "sm" | "md";
}

/**
 * The `card` container has flexible dimensions for any type of content.
 */
export const Card = ({
  children,
  variant = "primary",
  noPadding,
  borderRadiusSize = "md",
}: CardProps): React.ReactElement => {
  const additionalClasses = [
    `Card--${variant}`,
    ...(borderRadiusSize !== "md" ? [`Card--radius-${borderRadiusSize}`] : []),
  ].join(" ");

  const customStyle = {
    ...(noPadding ? { "--Card-padding": 0 } : {}),
  } as React.CSSProperties;

  return (
    <div className={`Card ${additionalClasses}`} style={customStyle}>
      {children}
    </div>
  );
};

Card.displayName = "Card";
