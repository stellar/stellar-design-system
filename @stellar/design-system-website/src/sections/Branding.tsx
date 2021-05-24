import {
  Heading2,
  Heading3,
  ProjectLogo,
  Layout,
} from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const Branding = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.branding)}>
        Branding
      </RouteLink>
    </Heading2>

    <Heading3>Project logo</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <ProjectLogo title="Project name" link="https://stellar.org" />
      </div>
    </div>
  </Layout.Inset>
);
