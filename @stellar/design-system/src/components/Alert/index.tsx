import { Button } from "../Button";
import { Card } from "../Card";
import { Heading } from "../Typography";
import { Icon } from "../../icons";
import { Link } from "../Link";
import { NavButton } from "../NavButton";

import "./styles.scss";

/** */
export type AlertBaseProps = {
  /** Alert variant */
  variant: "primary" | "secondary" | "success" | "warning" | "error";
  /** Alert placement */
  placement: "inline" | "bottom";
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

/** Use `Alert` to show a message with or without an action. Place the alert `inline` to show it anywhere on the UI. `bottom` placement should be used only to show the alert at the bottom of the layout; it's the opposite of {@link Banner} which is used only at the top. */
export type AlertProps = (AlertActionButton | AlertActionLink) & AlertBaseProps;

/** Display an alert message inline or at the bottom of the page */
export const Alert = ({
  variant,
  placement,
  title,
  onClose,
  onAction,
  actionLink,
  actionLabel = "Action",
  icon = <Icon.InfoCircle />,
  children,
}: AlertProps): React.ReactElement => {
  if (placement === "bottom" && actionLink) {
    throw Error(
      "Bottom alert cannot use `actionLink` because it's a button. Use `onAction` instead.",
    );
  }

  const getActionVariant = () => {
    if (placement === "inline") {
      return variant === "error" ? "error" : "primary";
    } else {
      if (variant === "primary") {
        return "primary";
      }

      if (variant === "error") {
        return "error";
      }

      return "secondary";
    }
  };

  const renderDismissElement = () => {
    if (!onClose) {
      return null;
    }

    if (placement === "inline") {
      return (
        <Link variant="secondary" role="button" onClick={onClose}>
          Dismiss
        </Link>
      );
    }

    return (
      <Button variant="tertiary" onClick={onClose} size="md">
        Dismiss
      </Button>
    );
  };

  const renderActionElement = () => {
    if (!(onAction || actionLink)) {
      return null;
    }

    if (placement === "inline") {
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
    }

    return (
      <Button variant={getActionVariant()} onClick={onClose} size="md">
        {actionLabel}
      </Button>
    );
  };

  const renderAlert = () => {
    return (
      <div
        role="alert"
        className={`Alert Alert--${variant} Alert--${placement}`}
      >
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

  return placement === "inline" ? (
    <Card noPadding variant={variant === "secondary" ? "secondary" : "primary"}>
      {renderAlert()}
    </Card>
  ) : (
    <div className="AlertContainer">{renderAlert()}</div>
  );
};

Alert.displayName = "Alert";
