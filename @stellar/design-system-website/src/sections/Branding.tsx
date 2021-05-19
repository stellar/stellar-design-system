import {
  Heading2,
  Heading3,
  ProjectLogo,
  Layout,
} from "@stellar/design-system";

export const Branding = () => (
  <Layout.Inset>
    <Heading2>Branding</Heading2>

    <Heading3>Project logo</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <ProjectLogo title="Project name" />
      </div>
    </div>
  </Layout.Inset>
);
