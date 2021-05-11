import React from "react";
import { ButtonIcon } from "../basic/ButtonIcon";
import "./styles.scss";

enum TextLinkVariant {
  primary = "primary",
  secondary = "secondary",
}

interface TextLinkComponent {
  variant: typeof TextLinkVariant;
}

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  variant?: TextLinkVariant;
  children: string | React.ReactNode;
}

export const TextLink: React.FC<TextLinkProps> & TextLinkComponent = ({
  href,
  iconLeft,
  iconRight,
  variant = TextLinkVariant.primary,
  children,
  ...props
}) => {
  const isExternalLink = href.startsWith("http") || href.startsWith("//");

  return (
    <a
      href={href}
      className={`TextLink TextLink--${variant}`}
      {...(isExternalLink
        ? { rel: "noreferrer noopener", target: "_blank" }
        : {})}
      {...props}
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

TextLink.variant = TextLinkVariant;
