import { Button, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const buttons: ComponentDetails = {
  id: ComponentDetailsId.buttons,
  title: "Buttons",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <Button>Label</Button>,
    <Button iconLeft={<Icon.Checkmark />}>Label</Button>,
    <Button variant={Button.variant.secondary}>Label</Button>,
    <Button variant={Button.variant.secondary} iconLeft={<Icon.Checkmark />}>
      Label
    </Button>,
    <Button variant={Button.variant.tertiary}>Label</Button>,
    <Button variant={Button.variant.tertiary} iconLeft={<Icon.Checkmark />}>
      Label
    </Button>,
  ],
  examples: [
    {
      title: "Primary (default)",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Button>Label</Button>,
        <Button disabled>Label</Button>,
        <Button isLoading>Label</Button>,
      ],
    },
    {
      title: "Primary with icon on the left",
      description: "",
      component: [
        <Button iconLeft={<Icon.Checkmark />}>Label</Button>,
        <Button iconLeft={<Icon.Checkmark />} disabled>
          Label
        </Button>,
        <Button iconLeft={<Icon.Checkmark />} isLoading>
          Label
        </Button>,
      ],
    },
    {
      title: "Primary with icon on the right",
      description: "",
      component: [
        <Button iconRight={<Icon.Checkmark />}>Label</Button>,
        <Button iconRight={<Icon.Checkmark />} disabled>
          Label
        </Button>,
        <Button iconRight={<Icon.Checkmark />} isLoading>
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
      ],
    },
    {
      title: "Secondary with icon on the left",
      description: "",
      component: [
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Checkmark />}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconLeft={<Icon.Checkmark />}
          isLoading
        >
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary with icon on the right",
      description: "",
      component: [
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Checkmark />}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.secondary}
          iconRight={<Icon.Checkmark />}
          isLoading
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
      ],
    },
    {
      title: "Tertiary with icon on the left",
      description: "",
      component: [
        <Button variant={Button.variant.tertiary} iconLeft={<Icon.Checkmark />}>
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconLeft={<Icon.Checkmark />}
          isLoading
        >
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary with icon on the right",
      description: "",
      component: [
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Checkmark />}
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Checkmark />}
          disabled
        >
          Label
        </Button>,
        <Button
          variant={Button.variant.tertiary}
          iconRight={<Icon.Checkmark />}
          isLoading
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
      description: "Label of the button.",
    },
    {
      prop: "iconLeft",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "iconRight",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "isLoading",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "variant",
      type: ["primary", "secondary", "tertiary"],
      default: "primary",
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes",
    label: "button attributes",
  },
};
