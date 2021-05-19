import { Heading2, Heading3, Loader, Layout } from "@stellar/design-system";

export const Loaders = () => (
  <Layout.Inset>
    <Heading2>Loaders</Heading2>

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
