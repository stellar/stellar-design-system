import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export interface NotificationProps {
  /** Variant of the notification */
  variant: "primary" | "secondary" | "success" | "error" | "warning";
  /** Notification title */
  title: string;
  /** Notification icon @defaultValue `<Icon.InfoCircle />` */
  icon?: React.ReactNode;
  /** Notification background */
  isFilled?: boolean;
  /** Notification message */
  children?: string | React.ReactNode;
}

interface Props
  extends NotificationProps,
    React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
}

// TODO: Notification: add action buttons
// TODO: Notification: floating with max width

/**
 * Use `notification` to draw a user's attention. There are five variants `primary`, `secondary`, `success`, `error`, and `warning`.
 */
export const Notification = ({
  variant,
  title,
  icon,
  isFilled,
  children,
}: Props): JSX.Element => {
  const additionalClasses = [
    `Notification--${variant}`,
    ...(isFilled ? [`Notification--filled`] : []),
  ].join(" ");

  return (
    <div className={`Notification ${additionalClasses}`}>
      <div className="Notification__title">
        <div className="Notification__title__icon">
          {icon ? icon : <Icon.InfoCircle />}
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
