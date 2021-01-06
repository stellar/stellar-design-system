import React from "react";
import "./styles.scss";

export enum InfoBlockVariant {
  info = "info",
  error = "error",
  warning = "warning",
}

interface InfoBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InfoBlockVariant;
  children: React.ReactNode;
}

export const InfoBlock = ({
  variant = InfoBlockVariant.info,
  children,
}: InfoBlockProps) => <div className={`InfoBlock ${variant}`}>{children}</div>;
