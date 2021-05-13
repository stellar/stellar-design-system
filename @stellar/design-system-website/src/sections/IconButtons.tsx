import {
  Heading2,
  Heading3,
  IconButton,
  IconInfo,
} from "@stellar/design-system";

export const IconButtons = () => (
  <div className="inset">
    <Heading2>Icon button</Heading2>

    <Heading3>Default</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton icon={<IconInfo />} altText="Icon button label" />
      </div>
      <div className="item-wrapper">
        <IconButton icon={<IconInfo />} altText="Icon button label" disabled />
      </div>
    </div>

    <Heading3>Success</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.success}
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.success}
          disabled
        />
      </div>
    </div>

    <Heading3>Error</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.error}
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.error}
          disabled
        />
      </div>
    </div>

    <Heading3>Warning</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.warning}
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.warning}
          disabled
        />
      </div>
    </div>

    <Heading3>Highlight</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.highlight}
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          variant={IconButton.variant.highlight}
          disabled
        />
      </div>
    </div>

    <Heading3>Custom color</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          customColor="#f0f"
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          customColor="#f0f"
          disabled
        />
      </div>
    </div>

    <Heading3>Custom size</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          customSize="2rem"
        />
      </div>
      <div className="item-wrapper">
        <IconButton
          icon={<IconInfo />}
          altText="Icon button label"
          customSize="2rem"
          disabled
        />
      </div>
    </div>
  </div>
);
