import {
  Button,
  IconCheckmark,
  Heading2,
  Heading3,
} from "@stellar/design-system";

export const Buttons = () => (
  <div className="inset">
    <Heading2>Button</Heading2>

    <Heading3>Primary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Button>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button disabled>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconLeft={<IconCheckmark />}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconLeft={<IconCheckmark />} disabled>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button iconRight={<IconCheckmark />}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconRight={<IconCheckmark />} disabled>
          Label
        </Button>
      </div>
    </div>

    <Heading3>Secondary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Button variant={Button.variant.secondary}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.secondary} disabled>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.secondary} iconLeft={<IconCheckmark />}>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconLeft={<IconCheckmark />}
          disabled
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconRight={<IconCheckmark />}
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconRight={<IconCheckmark />}
          disabled
        >
          Label
        </Button>
      </div>
    </div>
  </div>
);
