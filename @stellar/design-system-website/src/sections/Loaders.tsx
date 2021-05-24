import { Heading2, Heading3, Loader, Layout } from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const Loaders = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.loaders)}>
        Loaders
      </RouteLink>
    </Heading2>

    <Heading3>Loader</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Loader />
      </div>

      <div className="item-wrapper">
        <Loader size="3rem" />
      </div>
    </div>
  </Layout.Inset>
);
