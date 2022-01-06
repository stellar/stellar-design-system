import React, { useEffect } from "react";
import { Icon } from "../../icons";
import { ProjectLogo } from "../ProjectLogo";
import { TextLink } from "../TextLink";
import { ToggleDarkMode, ModeValue } from "../ToggleDarkMode";
import { NavButton } from "../NavButton";
import "./styles.scss";

interface LayoutComponent {
  Inset: React.FC<InsetProps>;
  Content: React.FC<ContentProps>;
  Header: React.FC<HeaderProps>;
  Footer: React.FC<FooterProps>;
}

export const Layout: LayoutComponent = () => {
  // do nothing
};

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
  projectLink?: string;
  hasDarkModeToggle?: boolean;
  onDarkModeToggleEnd?: (isDarkMode: boolean) => void;
  onSignOut?: () => void;
  showButtonBorder?: boolean;
  menu?: {
    isEnabled: boolean;
    onOpen: () => void;
  };
  contentCenter?: React.ReactElement;
  contentRight?: React.ReactElement;
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
  onDarkModeToggleEnd,
  onSignOut,
  showButtonBorder,
  menu,
  contentCenter,
  contentRight,
}: HeaderProps) => {
  // Set default mode to light, if there is no theme toggle
  useEffect(() => {
    if (!hasDarkModeToggle) {
      document.body.classList.add(ModeValue.light);
    }
  }, [hasDarkModeToggle]);

  return (
    <div className="Layout__header">
      <Layout.Inset>
        {/* Left */}
        <div className="Layout__header--left">
          <ProjectLogo title={projectTitle} link={projectLink} />
        </div>

        {/* Center */}
        {contentCenter ? (
          <div className="Layout__header--center">{contentCenter}</div>
        ) : null}

        {/* Right */}
        <div className="Layout__header--right">
          {contentRight ?? null}

          {onSignOut ? (
            <TextLink id="sign-out-button" role="button" onClick={onSignOut}>
              Sign out
            </TextLink>
          ) : null}

          {hasDarkModeToggle ? (
            <ToggleDarkMode
              storageKeyId={`stellarTheme:${stringToCamelcase(projectTitle)}`}
              showBorder={showButtonBorder}
              onToggleEnd={onDarkModeToggleEnd}
            />
          ) : null}

          {menu?.isEnabled ? (
            <NavButton
              id="open-side-nav-button"
              title="Open side navigation"
              onClick={menu.onOpen}
              icon={<Icon.Menu />}
              showBorder={showButtonBorder}
            />
          ) : null}
        </div>
      </Layout.Inset>
    </div>
  );
};

interface FooterProps {
  marginTop?: string;
  hideLegalLinks?: boolean;
  hideTopBorder?: boolean;
  gitHubLink?: string;
  gitHubLabel?: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({
  marginTop,
  hideLegalLinks,
  hideTopBorder,
  gitHubLink,
  gitHubLabel,
  children,
}: FooterProps) => {
  const customStyle = {
    ...(marginTop ? { "--Layout-footer-margin-top": marginTop } : {}),
    ...(hideTopBorder ? { "--Layout-footer-border-color": "transparent" } : {}),
  } as React.CSSProperties;

  return (
    <div className="Layout__footer" style={customStyle}>
      <Inset>
        <div className="Layout__footer__content">
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

          <div className="Layout__rightSide--inline">
            {gitHubLink ? (
              <TextLink
                href={gitHubLink}
                variant={TextLink.variant.secondary}
                iconLeft={<Icon.Github />}
              >
                {gitHubLabel ?? "GitHub"}
              </TextLink>
            ) : null}
            {children}
          </div>
        </div>
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
