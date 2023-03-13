import React from "react";
import "./styles.scss";

interface BannerProps {
  variant: "default" | "success" | "warning" | "primary" | "error";
  children: string | React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({ variant, children }) => (
  <div className={`Banner Banner--${variant}`}>
    <div className="Banner__content">{children}</div>
  </div>
);

Banner.displayName = "Banner";
