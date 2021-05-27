import React from "react";
import { Logo } from "../../logos";
import { ProjectLogo } from "../ProjectLogo";
import { TextLink } from "../TextLink";
import { ToggleDarkMode } from "../ToggleDarkMode";
import "./styles.scss";

interface LayoutComponent {
  Inset: React.FC<InsetProps>;
  Content: React.FC<ContentProps>;
  Header: React.FC<HeaderProps>;
  Footer: React.FC<FooterProps>;
}

export const Layout: LayoutComponent = () => {};

interface InsetProps {
  children: React.ReactNode;
}

const Inset: React.FC<InsetProps> = ({ children }: InsetProps) => (
  <div className="Layout__inset">{children}</div>
);

interface ContentProps {
  children: React.ReactNode;
}

const Content: React.FC<ContentProps> = ({ children }: ContentProps) => (
  <div className="Layout__content">{children}</div>
);

interface HeaderProps {
  projectTitle: string;
  projectLink: string;
  hasDarkModeToggle?: boolean;
  children?: React.ReactNode;
}

const stringToCamelcase = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, "");

const Header: React.FC<HeaderProps> = ({
  projectTitle,
  projectLink,
  hasDarkModeToggle,
  children,
}: HeaderProps) => (
  <div className="Layout__header">
    <Inset>
      <ProjectLogo title={projectTitle} link={projectLink} />
      {children}
      {hasDarkModeToggle ? (
        <ToggleDarkMode
          storageKeyId={`stellarTheme:${stringToCamelcase(projectTitle)}`}
        />
      ) : null}
    </Inset>
  </div>
);

interface FooterProps {
  marginTop?: string;
  hideLegalLinks?: boolean;
  gitHubLink?: string;
  gitHubLabel?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
  marginTop,
  hideLegalLinks,
  gitHubLink,
  gitHubLabel,
  children,
}: FooterProps) => {
  const customStyle = {
    ...(marginTop ? { "--Layout-footer-margin-top": marginTop } : {}),
  } as React.CSSProperties;

  return (
    <div className="Layout__footer" style={customStyle}>
      <Inset>
        {hideLegalLinks ? null : (
          <div className="Layout__footer__legal">
            <TextLink
              href="https://www.stellar.org/terms-of-service"
              variant={TextLink.variant.secondary}
            >
              Terms of Service
            </TextLink>

            <TextLink
              href="https://www.stellar.org/privacy-policy"
              variant={TextLink.variant.secondary}
            >
              Privacy Policy
            </TextLink>
          </div>
        )}

        {gitHubLink ? (
          <TextLink
            href={gitHubLink}
            variant={TextLink.variant.secondary}
            iconLeft={<Logo.GitHub />}
          >
            {gitHubLabel ?? "GitHub"}
          </TextLink>
        ) : null}
        {children}
      </Inset>
    </div>
  );
};

Layout.Inset = Inset;
Layout.Inset.displayName = "Layout.Inset";
Layout.Content = Content;
Layout.Content.displayName = "Layout.Content";
Layout.Header = Header;
Layout.Header.displayName = "Layout.Header";
Layout.Footer = Footer;
Layout.Footer.displayName = "Layout.Footer";
