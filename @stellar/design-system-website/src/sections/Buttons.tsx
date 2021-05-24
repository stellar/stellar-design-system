import {
  Button,
  Icon,
  Heading2,
  Heading3,
  Layout,
} from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const Buttons = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.buttons)}>
        Buttons
      </RouteLink>
    </Heading2>

    <Heading3>Primary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Button>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button disabled>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconLeft={<Icon.Checkmark />}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconLeft={<Icon.Checkmark />} disabled>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button iconRight={<Icon.Checkmark />}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button iconRight={<Icon.Checkmark />} disabled>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button isLoading>Label</Button>
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
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Checkmark />}
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Checkmark />}
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.secondary} isLoading>
          Label
        </Button>
      </div>
    </div>

    <Heading3>Tertiary</Heading3>
    <div className="item-container item-container-dark">
      <div className="item-wrapper">
        <Button variant={Button.variant.tertiary}>Label</Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.tertiary} disabled>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.tertiary} iconLeft={<Icon.Checkmark />}>
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Checkmark />}
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>
      </div>
      <div className="item-wrapper">
        <Button variant={Button.variant.tertiary} isLoading>
          Label
        </Button>
      </div>
    </div>
  </Layout.Inset>
);
