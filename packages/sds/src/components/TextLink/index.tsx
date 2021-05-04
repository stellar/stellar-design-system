import React from "react";
import "./styles.scss";

export enum TextLinkVariant {
  primary = "primary",
  secondary = "secondary",
}

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
  variant?: TextLinkVariant;
}

export const TextLink: React.FC<TextLinkProps> = ({
  variant = TextLinkVariant.primary,
  children,
  ...props
}) => (
  <a className="TextLink" data-variant={variant} {...props}>
    {children}
  </a>
);
