import React from "react";
import { Button } from "../Button";
import { Icon } from "../../icons";

import "./styles.scss";

/** */
export interface NotificationBaseProps {
  /** Variant of the notification */
  variant: "primary" | "success" | "error" | "warning";
  /** Notification title */
  title: string | React.ReactNode;
  /** Notification icon @defaultValue `<Icon.InfoCircle />` */
  icon?: React.ReactNode;
  /** Notification background */
  isFilled?: boolean;
  /** Notification message */
  children?: string | React.ReactNode;
}

/** */
export type NotificationActionButton = {
  /** Action function */
  onAction?: () => void;
  /** Notification action label @defaultValue `Action` */
  actionLabel?: string;
  /** Notification action link */
  actionLink?: string;
  /** Dismiss and close action */
  onClose?: () => void;
};

/** */
export interface NotificationProps
  extends NotificationBaseProps,
    NotificationActionButton {}

// TODO: Notification: floating with max width

/**
 * Use `notification` to draw a user's attention. There are five variants `primary`,  `success`, `error`, and `warning`.
 */
export const Notification = ({
  variant,
  title,
  icon,
  isFilled,
  children,
  onAction,
  onClose,
  actionLink,
  actionLabel = "Action",
}: NotificationProps): React.ReactElement => {
  const additionalClasses = [
    `Notification--${variant}`,
    ...(isFilled ? [`Notification--filled`] : []),
  ].join(" ");

  const renderActionElement = () => {
    if (!(onAction || actionLink)) {
      return null;
    }

    return (
      <Button variant={getActionVariant()} size="md">
        {actionLabel}
      </Button>
    );
  };

  const renderDismissElement = () => {
    if (!onClose) {
      return null;
    }

    return (
      <Button variant="tertiary" onClick={onClose} size="md">
        Dismiss
      </Button>
    );
  };

  const getActionVariant = () => {
    return variant === "error" ? "error" : "primary";
  };

  return (
    <div className={`Notification ${additionalClasses}`}>
      <div className="Notification__content">
        <div className="Notification__content__iconContainer">
          <div className="Notification__icon">
            {icon ? icon : <Icon.InfoCircle />}
          </div>
        </div>
        <div className="Notification__content__contentContainer">
          <div className="Notification__content__text">
            <div className="Notification__content__title">{title}</div>

            {children ? (
              <div className="Notification__content__message">{children}</div>
            ) : null}
          </div>

          {onClose || onAction || actionLink ? (
            <div className="Notification__content__buttons">
              {renderDismissElement()}

              {renderActionElement()}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

Notification.displayName = "Notification";
