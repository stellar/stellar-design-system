import React from "react";
import "./styles.scss";

interface CardProps {
  children: React.ReactNode;
  noPadding?: boolean;
  noShadow?: boolean;
}

export const Card = ({ children, noPadding, noShadow }: CardProps) => {
  const customStyle = {
    ...(noPadding ? { "--Card-padding": 0 } : {}),
    ...(noShadow ? { "--Card-shadow": "none" } : {}),
  } as React.CSSProperties;

  return (
    <div className="Card" style={customStyle}>
      {children}
    </div>
  );
};

Card.displayName = "Card";
