import { Heading2, Heading3, ProjectLogo } from "@stellar/design-system";

export const Branding = () => (
  <div className="inset">
    <Heading2>Branding</Heading2>

    <Heading3>Project logo</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <ProjectLogo title="Project name" />
      </div>
    </div>
  </div>
);
