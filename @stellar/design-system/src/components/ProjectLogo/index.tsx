import React from "react";
import "./styles.scss";
import { Logo } from "../../logos";

/** */
export interface ProjectLogoProps {
  /** Project’s name */
  title?: string;
  /** Project’s website link @defaultValue `/` */
  link?: string;
}

/**
 * `ProjectLogo` contains the name of the project and its link and are displayed in the page header.
 */
export const ProjectLogo: React.FC<ProjectLogoProps> = ({
  title,
  link = "/",
}) => (
  <div className="ProjectLogo">
    <a href={link} rel="noreferrer noopener">
      <Logo.Stellar />
    </a>
    {title ? <div className="ProjectLogo__title">{title}</div> : null}
  </div>
);

ProjectLogo.displayName = "ProjectLogo";
