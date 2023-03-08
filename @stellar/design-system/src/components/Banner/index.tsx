import React from "react";
import { Layout } from "../Layout";
import "./styles.scss";

enum BannerVariant {
  info = "info",
  success = "success",
  error = "error",
  warning = "warning",
}

interface BannerComponent {
  variant: typeof BannerVariant;
}

interface BannerProps {
  variant: BannerVariant;
  children: string | React.ReactNode;
}

export const Banner: React.FC<BannerProps> & BannerComponent = ({
  variant,
  children,
}) => (
  <div className={`Banner Banner--${variant}`}>
    <Layout.Inset>{children}</Layout.Inset>
  </div>
);

Banner.displayName = "Banner";
Banner.variant = BannerVariant;
