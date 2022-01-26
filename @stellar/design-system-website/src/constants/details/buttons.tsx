import { Button, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const buttons: ComponentDetails = {
  id: ComponentDetailsId.buttons,
  title: "Buttons",
  description: (
    <>
      <code>Button</code> is used to trigger an action that is not opening a
      link (use <code>TextLink</code> instead). There are three variants of the{" "}
      <code>Button</code>: <code>primary</code>, <code>secondary</code>, and{" "}
      <code>tertiary</code>.
    </>
  ),
  shortDescription: "Used to trigger an action that is not opening a link",
  examples: [
    {
      title: "Primary (default)",
      description: "",
      component: [
        <Button>Label</Button>,
        <Button disabled>Label</Button>,
        <Button isLoading>Label</Button>,
        <Button size={Button.size.small}>Label</Button>,
        <Button fullWidth>Label</Button>,
      ],
    },
    {
      title: "Primary with icon on the left",
      description: "",
      component: [
        <Button iconLeft={<Icon.Check />}>Label</Button>,
        <Button iconLeft={<Icon.Check />} disabled>
          Label
        </Button>,
        <Button iconLeft={<Icon.Check />} isLoading>
          Label
        </Button>,
        <Button iconLeft={<Icon.Check />} size={Button.size.small}>
          Label
        </Button>,
        <Button iconLeft={<Icon.Check />} fullWidth>
          Label
        </Button>,
      ],
    },
    {
      title: "Primary with icon on the right",
      description: "",
      component: [
        <Button iconRight={<Icon.Check />}>Label</Button>,
        <Button iconRight={<Icon.Check />} disabled>
          Label
        </Button>,
        <Button iconRight={<Icon.Check />} isLoading>
          Label
        </Button>,
        <Button iconRight={<Icon.Check />} size={Button.size.small}>
          Label
        </Button>,
        <Button iconRight={<Icon.Check />} fullWidth>
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary",
      description: "",
      component: [
        <Button variant={Button.variant.secondary}>Label</Button>,
        <Button variant={Button.variant.secondary} disabled>
          Label
        </Button>,
        <Button variant={Button.variant.secondary} isLoading>
          Label
        </Button>,
        <Button variant={Button.variant.secondary} size={Button.size.small}>
          Label
        </Button>,
        <Button variant={Button.variant.secondary} fullWidth>
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary with icon on the left",
      description: "",
      component: [
        <Button variant={Button.variant.secondary} iconLeft={<Icon.Check />}>
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Check />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Check />}
          isLoading
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Check />}
          size={Button.size.small}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Check />}
          fullWidth
        >
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary with icon on the right",
      description: "",
      component: [
        <Button variant={Button.variant.secondary} iconRight={<Icon.Check />}>
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Check />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Check />}
          isLoading
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Check />}
          size={Button.size.small}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Check />}
          fullWidth
        >
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary",
      description: "",
      component: [
        <Button variant={Button.variant.tertiary}>Label</Button>,
        <Button variant={Button.variant.tertiary} disabled>
          Label
        </Button>,
        <Button variant={Button.variant.tertiary} isLoading>
          Label
        </Button>,
        <Button variant={Button.variant.tertiary} size={Button.size.small}>
          Label
        </Button>,
        <Button variant={Button.variant.tertiary} fullWidth>
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary with icon on the left",
      description: "",
      component: [
        <Button variant={Button.variant.tertiary} iconLeft={<Icon.Check />}>
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Check />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Check />}
          isLoading
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Check />}
          size={Button.size.small}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Check />}
          fullWidth
        >
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary with icon on the right",
      description: "",
      component: [
        <Button variant={Button.variant.tertiary} iconRight={<Icon.Check />}>
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Check />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Check />}
          isLoading
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Check />}
          size={Button.size.small}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Check />}
          fullWidth
        >
          Label
        </Button>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Label of the button",
    },
    {
      prop: "iconLeft",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element on the left of the label",
    },
    {
      prop: "iconRight",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element on the right of the label",
    },
    {
      prop: "isLoading",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Loading state indicator",
    },
    {
      prop: "variant",
      type: ["primary", "secondary", "tertiary"],
      default: "primary",
      optional: true,
      description: "Variant of the button",
    },
    {
      prop: "size",
      type: ["default", "small"],
      default: "default",
      optional: true,
      description: "Size of the button",
    },
    {
      prop: "fullWidth",
      type: ["Boolean"],
      default: "false",
      optional: true,
      description: "Width of the button",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes",
    label: "button attributes",
  },
};
