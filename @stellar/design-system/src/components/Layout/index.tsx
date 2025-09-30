import React, { useEffect } from "react";
import { Icon } from "../../icons";
import { Logo } from "../../logos";
import { ProjectLogo } from "../ProjectLogo";
import { Link } from "../Link";
import { ThemeMode, ThemeSwitch } from "../ThemeSwitch";
import { NavButton } from "../NavButton";
import "./styles.scss";

interface LayoutComponent {
  Inset?: (props: InsetProps) => JSX.Element;
  Content?: (props: ContentProps) => JSX.Element;
  Header?: (props: HeaderProps) => JSX.Element;
  Footer?: (props: FooterProps) => JSX.Element;
}

/**
 * Use the `Layout` component’s sub-components, such as `Content`, `Inset`, `Header`, and `Footer`, to build page layouts.
 */
export const Layout = {} as LayoutComponent & {
  Inset: (props: InsetProps) => JSX.Element;
  Content: (props: ContentProps) => JSX.Element;
  Header: (props: HeaderProps) => JSX.Element;
  Footer: (props: FooterProps) => JSX.Element;
};

/** */
export interface InsetProps {
  /** Content of the component */
  children: React.ReactNode;
}

/**
 * Inset defines width/max-width and horizontal margins. It is used in upper level block/section components to have consistent horizontal styling.
 */
export const Inset = ({ children }: InsetProps): JSX.Element => (
  <div className="Layout__inset">{children}</div>
);

Inset.displayName = "Layout.Inset";

/** */
export interface ContentProps {
  /** Content of the component */
  children: React.ReactNode;
}

/**
 * The page level content of the website (all other content goes in here). This content is on the same level as the header and footer.
 */
export const Content = ({ children }: ContentProps): JSX.Element => (
  <div className="Layout__content">{children}</div>
);

Content.displayName = "Layout.Content";

/** */
export interface HeaderProps {
  /** ID of the project */
  projectId: string;
  /** Name of the project */
  projectTitle?: string;
  /** Link of the project */
  projectLink?: string;
  /** Show theme switch */
  hasThemeSwitch?: boolean;
  /** Function to call at the end of the switch event */
  onThemeSwitchActionEnd?: (isDarkMode: boolean) => void;
  /** Show sign out link if function is provided */
  onSignOut?: () => void;
  /** Show border around navigation buttons */
  showButtonBorder?: boolean;
  /** Show burger menu icon */
  menu?: {
    isEnabled: boolean;
    onOpen: () => void;
  };
  /** Custom content in the middle */
  contentCenter?: React.ReactElement;
  /** Custom content on the right */
  contentRight?: React.ReactElement;
  /** Do not set theme when page loads */
  disableSetThemeOnLoad?: boolean;
}

const stringToCamelcase = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase(),
    )
    .replace(/\s+/g, "");

/**
 * The header of the website with the Stellar logo, project name, and theme switch.
 */
export const Header = ({
  projectId,
  projectTitle,
  projectLink,
  hasThemeSwitch,
  onThemeSwitchActionEnd,
  onSignOut,
  showButtonBorder,
  menu,
  contentCenter,
  contentRight,
  disableSetThemeOnLoad,
}: HeaderProps): JSX.Element => {
  // Set default mode to light, if there is no theme toggle
  useEffect(() => {
    if (disableSetThemeOnLoad) {
      return;
    }

    if (!hasThemeSwitch) {
      document.body.classList.add(ThemeMode.LIGHT);
    }
  }, [disableSetThemeOnLoad, hasThemeSwitch]);

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
            <Link id="sign-out-button" role="button" onClick={onSignOut}>
              Sign out
            </Link>
          ) : null}

          {hasThemeSwitch ? (
            <ThemeSwitch
              storageKeyId={`stellarTheme:${stringToCamelcase(projectId)}`}
              onActionEnd={onThemeSwitchActionEnd}
              disableSetThemeOnLoad={disableSetThemeOnLoad}
            />
          ) : null}

          {menu?.isEnabled ? (
            <NavButton
              id="open-side-nav-button"
              title="Open side navigation"
              onClick={menu.onOpen}
              icon={<Icon.Menu01 />}
              showBorder={showButtonBorder}
            />
          ) : null}
        </div>
      </Layout.Inset>
    </div>
  );
};

Header.displayName = "Layout.Header";

/** */
export interface FooterProps {
  /** Set custom margin top */
  marginTop?: string;
  /** Hide legal links */
  hideLegalLinks?: boolean;
  /** Hide top border */
  hideTopBorder?: boolean;
  /** Link to GitHub repo */
  gitHubLink?: string;
  /** Title/label of GitHub link (visible on hover) */
  gitHubLabel?: string;
  /** Custom content in the footer */
  children?: React.ReactNode;
}

/**
 * Footer of the website with GitHub, Terms of Service, and Privacy Policy links.
 */
export const Footer = ({
  marginTop,
  hideLegalLinks,
  hideTopBorder,
  gitHubLink,
  gitHubLabel,
  children,
}: FooterProps): JSX.Element => {
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
              <Link
                href="https://www.stellar.org/terms-of-service"
                variant="secondary"
              >
                Terms of Service
              </Link>

              <Link
                href="https://www.stellar.org/privacy-policy"
                variant="secondary"
              >
                Privacy Policy
              </Link>
            </div>
          )}

          <div className="Layout__rightSide--inline">
            {gitHubLink ? (
              <Link
                href={gitHubLink}
                variant="secondary"
                icon={<Logo.Github />}
                iconPosition="left"
              >
                {gitHubLabel ?? "GitHub"}
              </Link>
            ) : null}
            {children}
          </div>
        </div>
      </Inset>
    </div>
  );
};

Footer.displayName = "Layout.Footer";

Layout.Inset = Inset;
Layout.Content = Content;
Layout.Header = Header;
Layout.Footer = Footer;
