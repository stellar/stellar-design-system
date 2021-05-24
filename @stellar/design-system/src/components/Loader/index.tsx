import React from "react";
import "./styles.scss";

interface LoaderProps {
  size?: string;
}

export const Loader: React.FC<LoaderProps> = ({ size }: LoaderProps) => {
  const customStyle = {
    ...(size ? { "--Loader-size": size } : {}),
  } as React.CSSProperties;

  return (
    <div className="Loader" style={customStyle}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

Loader.displayName = "Loader";
