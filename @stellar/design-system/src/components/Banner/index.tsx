import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export interface BannerProps {
  /** Variant of the banner */
  variant: "primary" | "secondary" | "success" | "warning" | "error";
  /** Notification icon @defaultValue `<Icon.InfoCircle />` */
  icon?: React.ReactNode;
  /** Message to display in the banner */
  children: string | React.ReactNode;
}

/**
 * Use `Banner` to display messages at the top of the page, stretching across the whole width. There are five variants `primary`, `secondary`, `success`, `warning`, and `error`.
 */
export const Banner = ({
  variant,
  icon = <Icon.InfoCircle />,
  children,
}: BannerProps): JSX.Element => (
  <div className={`Banner Banner--${variant}`}>
    <div className="Banner__message Banner__content">
      <div className="Banner__icon">{icon}</div>
      {children}
    </div>
  </div>
);

Banner.displayName = "Banner";
