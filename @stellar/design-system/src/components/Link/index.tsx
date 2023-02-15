import React from "react";
import "./styles.scss";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string | React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm" | "xs";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  isDisabled?: boolean;
  isUnderline?: boolean;
  isUppercase?: boolean;
}

export const Link: React.FC<LinkProps> = ({
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
