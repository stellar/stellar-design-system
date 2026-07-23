import React from "react";
import { Card } from "../Card";
import { Heading } from "../Typography";
import { Icon } from "../../icons";
import { Link } from "../Link";
import { NavButton } from "../NavButton";

import "./styles.scss";

/** */
export type AlertBaseProps = {
  /** Alert variant */
  variant: "primary" | "success" | "warning" | "error";
  /** Alert message title */
  title?: React.ReactNode;
  /** Dismiss and close action */
  onClose?: () => void;
  /** Alert action label @defaultValue `Action` */
  actionLabel?: string;
  /** Alert icon @defaultValue `<Icon.InfoCircle />` */
  icon?: React.ReactNode;
  /** Alet message */
  children: React.ReactNode;
};

/** */
export type AlertActionButton = {
  /** Action function */
  onAction?: () => void;
  actionLink?: undefined;
};

/** */
export type AlertActionLink = {
  /** Link to open */
  actionLink?: string;
  onAction?: undefined;
};

/** */
export type AlertProps = (AlertActionButton | AlertActionLink) & AlertBaseProps;

/** Use `Alert` to show a message with or without an action. */
export const Alert = ({
  variant,
  title,
  onClose,
  onAction,
  actionLink,
  actionLabel = "Action",
  icon = <Icon.InfoCircle />,
  children,
}: AlertProps): React.ReactElement => {
  const getActionVariant = () => {
    return variant === "error" ? "error" : "primary";
  };

  const renderDismissElement = () => {
    if (!onClose) {
      return null;
    }

    return (
      <Link variant="secondary" role="link" onClick={onClose}>
        Dismiss
      </Link>
    );
  };

  const renderActionElement = () => {
    if (!(onAction || actionLink)) {
      return null;
    }

    return (
      <Link
        variant={getActionVariant()}
        role={onAction ? "button" : "link"}
        onClick={onAction}
        href={actionLink}
      >
        {actionLabel}
      </Link>
    );
  };

  const renderAlert = () => {
    return (
      <div role="alert" className={`Alert Alert--${variant}`}>
        <div className="Alert__content">
          <div className="Alert__content__iconContainer">
            <div className="Alert__icon">{icon}</div>
          </div>
          <div className="Alert__content__contentContainer">
            <div className="Alert__content__textContainer">
              {title ? (
                <Heading as="h2" size="xs">
                  {title}
                </Heading>
              ) : null}
              <div>{children}</div>
            </div>

            {onClose || onAction || actionLink ? (
              <div className="Alert__content__buttons">
                {renderDismissElement()}

                {renderActionElement()}
              </div>
            ) : null}
          </div>
        </div>
        {onClose ? (
          <div className="Alert__close">
            <NavButton
              icon={<Icon.XClose />}
              onClick={onClose}
              title="Close alert"
            />
          </div>
        ) : null}
      </div>
    );
  };

  return (
    <Card noPadding variant="primary">
      {renderAlert()}
    </Card>
  );
};

Alert.displayName = "Alert";
