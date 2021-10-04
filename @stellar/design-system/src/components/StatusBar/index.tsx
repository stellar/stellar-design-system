import React from "react";
import { Layout } from "../Layout";
import "./styles.scss";

enum StatusBarVariant {
  info = "info",
  success = "success",
  error = "error",
  warning = "warning",
}

interface StatusBarComponent {
  variant: typeof StatusBarVariant;
}

interface StatusBarProps {
  variant: StatusBarVariant;
  children: string | React.ReactNode;
}

export const StatusBar: React.FC<StatusBarProps> & StatusBarComponent = ({
  variant,
  children,
}) => (
  <div className={`StatusBar StatusBar--${variant}`}>
    <Layout.Inset>{children}</Layout.Inset>
  </div>
);

StatusBar.displayName = "StatusBar";
StatusBar.variant = StatusBarVariant;
