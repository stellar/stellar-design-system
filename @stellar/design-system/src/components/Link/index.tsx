import React from "react";
import "./styles.scss";

/**
 * Including all valid [anchor element attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes).
 */
export interface LinkProps {
  /** Content of the link */
  children?: string | React.ReactNode;
  /** Variant of the link @defaultValue `primary` */
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  /** Size of the link, will inherit parent size if not set */
  size?: "md" | "sm" | "xs";
  /** Icon element */
  icon?: React.ReactNode;
  /** Position of the icon @defaultValue `right` */
  iconPosition?: "left" | "right";
  /** Disable the link */
  isDisabled?: boolean;
  /** Underline the link */
  isUnderline?: boolean;
  /** Make the link uppercase */
  isUppercase?: boolean;
}

interface Props
  extends LinkProps,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {}

/**
 * The `Link` component is a styled HTML anchor (`a`) element. Use `Link` to open links or to navigate to other pages.
 *
 * `Link` with external `href` (starting with `http(s)` or `//`) will have attributes `rel="noreferrer noopener"` and `target="_blank"` automatically added.
 */
export const Link: React.FC<Props> = ({
  children,
  variant = "primary",
  size,
  icon,
  iconPosition = "right",
  isDisabled,
  isUnderline,
  isUppercase,
  ...props
}) => {
  const { href, onClick } = props;
  const isExternalLink = href?.startsWith("http") || href?.startsWith("//");

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onClick && !isDisabled) {
      event.preventDefault();
      onClick(event);
    }
  };

  const customProps = {
    ...(isExternalLink && !isDisabled
      ? { rel: "noreferrer noopener", target: "_blank" }
      : {}),
    ...(href && isDisabled ? { href: undefined } : { href }),
    ...(onClick
      ? {
          onClick: handleClick,
          role: "button",
        }
      : {}),
  };

  const additionalClasses = [
    `Link--${variant}`,
    ...(size ? [`Link--${size}`] : []),
    ...(isDisabled ? ["Link--disabled"] : []),
    ...(isUnderline ? ["Link--underline"] : []),
    ...(isUppercase ? ["Link--uppercase"] : []),
  ].join(" ");

  const renderIcon = (position: "left" | "right") => {
    if (icon && iconPosition === position) {
      return <span className="Link__icon">{icon}</span>;
    }

    return null;
  };

  return (
    <a className={`Link ${additionalClasses}`} {...props} {...customProps}>
      {renderIcon("left")}
      {children}
      {renderIcon("right")}
    </a>
  );
};

Link.displayName = "Link";
