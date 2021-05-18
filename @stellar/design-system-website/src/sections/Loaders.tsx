import { Heading2, Heading3, Loader } from "@stellar/design-system";

export const Loaders = () => (
  <div className="inset">
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
  </div>
);
