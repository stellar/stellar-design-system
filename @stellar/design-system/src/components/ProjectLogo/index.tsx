import React from "react";
import "./styles.scss";
import { Logo } from "../../logos";

interface ProjectLogoProps {
  title: string;
  link?: string;
}

export const ProjectLogo: React.FC<ProjectLogoProps> = ({
  title,
  link = "https://www.stellar.org/",
}) => (
  <div className="ProjectLogo">
    <a href={link} rel="noreferrer noopener">
      <Logo.Stellar />
    </a>
    <div className="ProjectLogoTitle">{title}</div>
  </div>
);
