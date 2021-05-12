import {
  TextButton,
  IconCheckmark,
  Heading2,
  Heading3,
} from "@stellar/design-system";

export const TextButtons = () => (
  <div className="inset">
    <Heading2>Text button</Heading2>

    <Heading3>Primary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <TextButton>Label</TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton disabled>Label</TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton iconLeft={<IconCheckmark />}>Label</TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton iconLeft={<IconCheckmark />} disabled>
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton iconRight={<IconCheckmark />}>Label</TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton iconRight={<IconCheckmark />} disabled>
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton isLoading>Label</TextButton>
      </div>
    </div>

    <Heading3>Secondary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <TextButton variant={TextButton.variant.secondary}>Label</TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton variant={TextButton.variant.secondary} disabled>
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton
          variant={TextButton.variant.secondary}
          iconLeft={<IconCheckmark />}
        >
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton
          variant={TextButton.variant.secondary}
          iconLeft={<IconCheckmark />}
          disabled
        >
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton
          variant={TextButton.variant.secondary}
          iconRight={<IconCheckmark />}
        >
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton
          variant={TextButton.variant.secondary}
          iconRight={<IconCheckmark />}
          disabled
        >
          Label
        </TextButton>
      </div>
      <div className="item-wrapper">
        <TextButton variant={TextButton.variant.secondary} isLoading>
          Label
        </TextButton>
      </div>
    </div>
  </div>
);
