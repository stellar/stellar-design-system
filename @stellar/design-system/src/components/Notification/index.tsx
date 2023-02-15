import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

interface NotificationProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  variant: "primary" | "secondary" | "success" | "error" | "warning";
  title: string;
  icon?: React.ReactNode;
  children?: string | React.ReactNode;
}

export const Notification: React.FC<NotificationProps> = ({
  variant,
  title,
  icon,
  children,
}: NotificationProps) => {
  return (
    <div className={`Notification Notification--${variant}`}>
      <div className="Notification__title">
        <div className="Notification__title__icon">
          {icon ? icon : <Icon.Info />}
        </div>
        <div className="Notification__title__text">{title}</div>
      </div>
      {children ? (
        <div className="Notification__message">{children}</div>
      ) : null}
    </div>
  );
};

Notification.displayName = "Notification";
