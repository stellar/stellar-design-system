import { Heading2, InfoBlock, Layout } from "@stellar/design-system";

export const InfoBlocks = () => (
  <Layout.Inset>
    <Heading2>Info blocks</Heading2>

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
