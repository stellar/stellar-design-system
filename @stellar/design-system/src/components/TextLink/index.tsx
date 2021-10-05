import React from "react";
import { ButtonIcon } from "../utils/ButtonIcon";
import "./styles.scss";

enum TextLinkVariant {
  primary = "primary",
  secondary = "secondary",
}

interface TextLinkComponent {
  variant: typeof TextLinkVariant;
}

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: TextLinkVariant;
  disabled?: boolean;
  underline?: boolean;
  children: string | React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> & TextLinkComponent = ({
  iconLeft,
  iconRight,
  variant = TextLinkVariant.primary,
  disabled,
  underline,
  children,
  ...props
}) => {
  const { href, onClick } = props;
  const isExternalLink = href?.startsWith("http") || href?.startsWith("//");

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    if (onClick && !disabled) {
      event.preventDefault();
      onClick(event);
    }
  };

  const customProps = {
    ...(isExternalLink && !disabled
      ? { rel: "noreferrer noopener", target: "_blank" }
      : {}),
    ...(href && disabled ? { href: undefined } : { href }),
    ...(onClick
      ? {
          onClick: handleClick,
          role: "button",
        }
      : {}),
  };

  const additionalClasses = [
    ...(underline ? ["TextLink--underline"] : []),
    ...(disabled ? ["TextLink--disabled"] : []),
  ].join(" ");

  return (
    <a
      className={`TextLink TextLink--${variant} ${additionalClasses}`}
      {...props}
      {...customProps}
    >
      {iconLeft ? (
        <ButtonIcon position={ButtonIcon.position.left}>{iconLeft}</ButtonIcon>
      ) : null}
      {children}
      {iconRight ? (
        <ButtonIcon position={ButtonIcon.position.right}>
          {iconRight}
        </ButtonIcon>
      ) : null}
    </a>
  );
};

TextLink.displayName = "TextLink";
TextLink.variant = TextLinkVariant;
