import React from "react";
import "./styles.scss";

/** */
export interface LoaderProps {
  /** Set custom size of the component */
  size?: string;
}

/**
 * Loader component color is set in CSS, and the size can also be set in CSS or through the `size` prop.
 */
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
