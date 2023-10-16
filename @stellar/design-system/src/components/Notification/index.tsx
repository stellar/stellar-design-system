import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export interface NotificationProps {
  /** Variant of the notification */
  variant: "primary" | "secondary" | "success" | "error" | "warning";
  /** Notification title */
  title: string;
  /** Notification icon @defaultValue `<Icon.Info />` */
  icon?: React.ReactNode;
  /** Notification message */
  children?: string | React.ReactNode;
}

interface Props
  extends NotificationProps,
    React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

/**
 * Use `notification` to draw a user's attention. There are five variants `primary`, `secondary`, `success`, `error`, and `warning`.
 */
export const Notification: React.FC<Props> = ({
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
