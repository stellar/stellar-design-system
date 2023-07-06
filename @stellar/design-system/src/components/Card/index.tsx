import React from "react";
import "./styles.scss";

interface CardProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  noPadding?: boolean;
  borderRadiusSize?: "sm" | "md";
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = "primary",
  noPadding,
  borderRadiusSize = "md",
}: CardProps) => {
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
