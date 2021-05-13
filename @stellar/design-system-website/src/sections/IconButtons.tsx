import { Heading2, IconButton, IconInfo } from "@stellar/design-system";

export const IconButtons = () => (
  <div className="inset">
    <Heading2>Icon button</Heading2>

    <div className="item-container">
      <div className="item-wrapper inline">
        <IconButton icon={<IconInfo />} altText="Default" />

        <IconButton
          icon={<IconInfo />}
          altText="Success"
          variant={IconButton.variant.success}
        />

        <IconButton
          icon={<IconInfo />}
          altText="Error"
          variant={IconButton.variant.error}
        />

        <IconButton
          icon={<IconInfo />}
          altText="Warning"
          variant={IconButton.variant.warning}
        />

        <IconButton
          icon={<IconInfo />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
        />

        <IconButton
          icon={<IconInfo />}
          altText="Custom color"
          customColor="#f0f"
        />

        <IconButton
          icon={<IconInfo />}
          altText="Custom size"
          customSize="2rem"
        />
      </div>

      <div className="item-wrapper inline">
        <IconButton icon={<IconInfo />} altText="Default" disabled />

        <IconButton
          icon={<IconInfo />}
          altText="Success"
          variant={IconButton.variant.success}
          disabled
        />

        <IconButton
          icon={<IconInfo />}
          altText="Error"
          variant={IconButton.variant.error}
          disabled
        />

        <IconButton
          icon={<IconInfo />}
          altText="Warning"
          variant={IconButton.variant.warning}
          disabled
        />

        <IconButton
          icon={<IconInfo />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
          disabled
        />

        <IconButton
          icon={<IconInfo />}
          altText="Custom color"
          customColor="#f0f"
          disabled
        />

        <IconButton
          icon={<IconInfo />}
          altText="Custom size"
          customSize="2rem"
          disabled
        />
      </div>
    </div>
  </div>
);
