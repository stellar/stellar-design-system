import React from "react";
import "./styles.scss";

/** */
export interface BannerProps {
  /** Variant of the banner */
  variant: "default" | "success" | "warning" | "primary" | "error";
  /** Message to display in the banner */
  children: string | React.ReactNode;
}

/**
 * Use banner to display messages at the top of the page, stretching across the whole width. There are five variants `default`, `primary`, `success`, `error`, and `warning`.
 */
export const Banner: React.FC<BannerProps> = ({ variant, children }) => (
  <div className={`Banner Banner--${variant}`}>
    <div className="Banner__content">{children}</div>
  </div>
);

Banner.displayName = "Banner";
