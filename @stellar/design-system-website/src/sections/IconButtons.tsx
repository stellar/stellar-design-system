import { Heading2, IconButton, Icon, Layout } from "@stellar/design-system";

export const IconButtons = () => (
  <Layout.Inset>
    <Heading2>Icon button</Heading2>

    <div className="item-container">
      <div className="item-wrapper inline">
        <IconButton icon={<Icon.Info />} altText="Default" />

        <IconButton
          icon={<Icon.Info />}
          altText="Success"
          variant={IconButton.variant.success}
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Error"
          variant={IconButton.variant.error}
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Warning"
          variant={IconButton.variant.warning}
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Custom color"
          customColor="#f0f"
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Custom size"
          customSize="2rem"
        />
      </div>

      <div className="item-wrapper inline">
        <IconButton icon={<Icon.Info />} altText="Default" disabled />

        <IconButton
          icon={<Icon.Info />}
          altText="Success"
          variant={IconButton.variant.success}
          disabled
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Error"
          variant={IconButton.variant.error}
          disabled
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Warning"
          variant={IconButton.variant.warning}
          disabled
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
          disabled
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Custom color"
          customColor="#f0f"
          disabled
        />

        <IconButton
          icon={<Icon.Info />}
          altText="Custom size"
          customSize="2rem"
          disabled
        />
      </div>
    </div>
  </Layout.Inset>
);
