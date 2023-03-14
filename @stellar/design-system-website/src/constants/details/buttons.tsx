import { Button, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const buttons: ComponentDetails = {
  id: ComponentDetailsId.buttons,
  title: "Buttons",
  description: (
    <>
      <code>Button</code> is used to trigger an action that is not opening a
      link (use <code>Link</code> instead). There are three variants of the{" "}
      <code>Button</code>: <code>primary</code>, <code>secondary</code>, and{" "}
      <code>tertiary</code>.
    </>
  ),
  shortDescription: "Used to trigger an action that is not opening a link",
  examples: [
    {
      title: "Primary, medium",
      description: "",
      component: [
        <Button variant="primary" size="md">
          Label
        </Button>,
        <Button
          variant="primary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="primary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="primary" size="md" disabled>
          Label
        </Button>,
        <Button variant="primary" size="md" isLoading>
          Label
        </Button>,
        <Button
          variant="primary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="left"
          isLoading
        >
          Label
        </Button>,
        <Button
          variant="primary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="right"
          isLoading
        >
          Label
        </Button>,
        <Button variant="primary" size="md" isUppercase>
          Label
        </Button>,
        <Button variant="primary" size="md" isFullWidth>
          Label
        </Button>,
        <Button variant="primary" size="md" isExtraPadding>
          Label
        </Button>,
        <Button variant="primary" size="md" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Primary, small",
      description: "",
      component: [
        <Button variant="primary" size="sm">
          Label
        </Button>,
        <Button
          variant="primary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="primary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="primary" size="sm" disabled>
          Label
        </Button>,
        <Button variant="primary" size="sm" isLoading>
          Label
        </Button>,
        <Button variant="primary" size="sm" isUppercase>
          Label
        </Button>,
        <Button variant="primary" size="sm" isFullWidth>
          Label
        </Button>,
        <Button variant="primary" size="sm" isExtraPadding>
          Label
        </Button>,
        <Button variant="primary" size="sm" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Primary, extra-small",
      description: "",
      component: [
        <Button variant="primary" size="xs">
          Label
        </Button>,
        <Button
          variant="primary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="primary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="primary" size="xs" disabled>
          Label
        </Button>,
        <Button variant="primary" size="xs" isLoading>
          Label
        </Button>,
        <Button variant="primary" size="xs" isUppercase>
          Label
        </Button>,
        <Button variant="primary" size="xs" isFullWidth>
          Label
        </Button>,
        <Button variant="primary" size="xs" isExtraPadding>
          Label
        </Button>,
        <Button variant="primary" size="xs" isPill>
          Label
        </Button>,
      ],
    },

    {
      title: "Secondary, medium",
      description: "",
      component: [
        <Button variant="secondary" size="md">
          Label
        </Button>,
        <Button
          variant="secondary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="secondary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="secondary" size="md" disabled>
          Label
        </Button>,
        <Button variant="secondary" size="md" isLoading>
          Label
        </Button>,
        <Button variant="secondary" size="md" isUppercase>
          Label
        </Button>,
        <Button variant="secondary" size="md" isFullWidth>
          Label
        </Button>,
        <Button variant="secondary" size="md" isExtraPadding>
          Label
        </Button>,
        <Button variant="secondary" size="md" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary, small",
      description: "",
      component: [
        <Button variant="secondary" size="sm">
          Label
        </Button>,
        <Button
          variant="secondary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="secondary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="secondary" size="sm" disabled>
          Label
        </Button>,
        <Button variant="secondary" size="sm" isLoading>
          Label
        </Button>,
        <Button variant="secondary" size="sm" isUppercase>
          Label
        </Button>,
        <Button variant="secondary" size="sm" isFullWidth>
          Label
        </Button>,
        <Button variant="secondary" size="sm" isExtraPadding>
          Label
        </Button>,
        <Button variant="secondary" size="sm" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Secondary, extra-small",
      description: "",
      component: [
        <Button variant="secondary" size="xs">
          Label
        </Button>,
        <Button
          variant="secondary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="secondary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="secondary" size="xs" disabled>
          Label
        </Button>,
        <Button variant="secondary" size="xs" isLoading>
          Label
        </Button>,
        <Button variant="secondary" size="xs" isUppercase>
          Label
        </Button>,
        <Button variant="secondary" size="xs" isFullWidth>
          Label
        </Button>,
        <Button variant="secondary" size="xs" isExtraPadding>
          Label
        </Button>,
        <Button variant="secondary" size="xs" isPill>
          Label
        </Button>,
      ],
    },

    {
      title: "Tertiary, medium",
      description: "",
      component: [
        <Button variant="tertiary" size="md">
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="md"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="tertiary" size="md" disabled>
          Label
        </Button>,
        <Button variant="tertiary" size="md" isLoading>
          Label
        </Button>,
        <Button variant="tertiary" size="md" isUppercase>
          Label
        </Button>,
        <Button variant="tertiary" size="md" isFullWidth>
          Label
        </Button>,
        <Button variant="tertiary" size="md" isExtraPadding>
          Label
        </Button>,
        <Button variant="tertiary" size="md" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary, small",
      description: "",
      component: [
        <Button variant="tertiary" size="sm">
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="sm"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="tertiary" size="sm" disabled>
          Label
        </Button>,
        <Button variant="tertiary" size="sm" isLoading>
          Label
        </Button>,
        <Button variant="tertiary" size="sm" isUppercase>
          Label
        </Button>,
        <Button variant="tertiary" size="sm" isFullWidth>
          Label
        </Button>,
        <Button variant="tertiary" size="sm" isExtraPadding>
          Label
        </Button>,
        <Button variant="tertiary" size="sm" isPill>
          Label
        </Button>,
      ],
    },
    {
      title: "Tertiary, extra-small",
      description: "",
      component: [
        <Button variant="tertiary" size="xs">
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="left"
        >
          Label
        </Button>,
        <Button
          variant="tertiary"
          size="xs"
          icon={<Icon.Check />}
          iconPosition="right"
        >
          Label
        </Button>,
        <Button variant="tertiary" size="xs" disabled>
          Label
        </Button>,
        <Button variant="tertiary" size="xs" isLoading>
          Label
        </Button>,
        <Button variant="tertiary" size="xs" isUppercase>
          Label
        </Button>,
        <Button variant="tertiary" size="xs" isFullWidth>
          Label
        </Button>,
        <Button variant="tertiary" size="xs" isExtraPadding>
          Label
        </Button>,
        <Button variant="tertiary" size="xs" isPill>
          Label
        </Button>,
      ],
    },
  ],
  props: [
    {
      prop: "variant",
      type: ["primary", "secondary", "tertiary"],
      default: null,
      optional: false,
      description: "Variant of the button",
    },
    {
      prop: "size",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the button",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the button",
    },
    {
      prop: "icon",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element",
    },
    {
      prop: "iconPosition",
      type: ["left", "right"],
      default: "right",
      optional: true,
      description: "Position of the icon",
    },
    {
      prop: "isLoading",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Loading state indicator",
    },
    {
      prop: "isUppercase",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Uppercase label",
    },
    {
      prop: "isFullWidth",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Sets width of the button to parent container",
    },
    {
      prop: "isPill",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Pill shaped button",
    },
    {
      prop: "isExtraPadding",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Button with extra padding",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes",
    label: "button attributes",
  },
};
