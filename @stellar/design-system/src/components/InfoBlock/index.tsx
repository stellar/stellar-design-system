import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

enum InfoBlockVariant {
  info = "info",
  success = "success",
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
}: InfoBlockProps) => {
  const variantIcon = {
    [InfoBlockVariant.info]: <Icon.Info />,
    [InfoBlockVariant.success]: <Icon.CheckCircle />,
    [InfoBlockVariant.error]: <Icon.XCircle />,
    [InfoBlockVariant.warning]: <Icon.AlertTriangle />,
  };

  return (
    <div className={`InfoBlock InfoBlock--${variant}`}>
      <div className="InfoBlock__icon">{variantIcon[variant]}</div>
      {children}
    </div>
  );
};

InfoBlock.displayName = "InfoBlock";
InfoBlock.variant = InfoBlockVariant;
