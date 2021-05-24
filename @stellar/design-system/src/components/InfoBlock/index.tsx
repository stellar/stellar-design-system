import React from "react";
import "./styles.scss";

enum InfoBlockVariant {
  info = "info",
  error = "error",
  warning = "warning",
}

interface InfoBlockComponent {
  variant: typeof InfoBlockVariant;
}

interface InfoBlockProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InfoBlockVariant;
  children: string | React.ReactNode;
}

export const InfoBlock: React.FC<InfoBlockProps> & InfoBlockComponent = ({
  variant = InfoBlockVariant.info,
  children,
}: InfoBlockProps) => (
  <div className={`InfoBlock InfoBlock--${variant}`}>{children}</div>
);

InfoBlock.displayName = "InfoBlock";
InfoBlock.variant = InfoBlockVariant;
