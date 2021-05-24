import { Heading2, InfoBlock, Layout } from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const InfoBlocks = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.infoBlocks)}>
        Info blocks
      </RouteLink>
    </Heading2>

    <div className="item-container">
      <div className="item-wrapper">
        <InfoBlock>Information (default) block</InfoBlock>
      </div>

      <div className="item-wrapper">
        <InfoBlock variant={InfoBlock.variant.error}>Error block</InfoBlock>
      </div>

      <div className="item-wrapper">
        <InfoBlock variant={InfoBlock.variant.warning}>Warning block</InfoBlock>
      </div>
    </div>
  </Layout.Inset>
);
