import React, { cloneElement } from "react";
import { Badge } from "../Badge";
import { Logo } from "../../logos";
import "./styles.scss";

/** */
export interface ProjectLogoProps {
  /** Project’s name */
  title?: string;
  /** Project’s website link @defaultValue `/` */
  link?: string;
  /** Provide a custom anchor element, for example, `Link` from Next.js */
  customAnchor?: React.ReactElement;
}

/**
 * `ProjectLogo` contains the name of the project and its link and are displayed in the page header.
 */
export const ProjectLogo = ({
  title,
  link = "/",
  customAnchor,
}: ProjectLogoProps): React.ReactElement => {
  const AnchorComponent = () => {
    const anchorProps = {
      href: link,
      rel: "noreferrer noopener",
      children: <Logo.Stellar />,
    };

    if (customAnchor) {
      return cloneElement(customAnchor, anchorProps);
    }

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a {...anchorProps} />;
  };

  return (
    <div className="ProjectLogo">
      <AnchorComponent />
      {title ? (
        <Badge variant="secondary" size="md">
          {title}
        </Badge>
      ) : null}
    </div>
  );
};

ProjectLogo.displayName = "ProjectLogo";
