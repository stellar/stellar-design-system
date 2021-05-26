import { IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const iconButtons: ComponentDetails = {
  id: ComponentDetailsId.iconButtons,
  title: "Icon buttons",
  description: (
    <>
      <code>IconButton</code> is similar to the <code>Button</code>, and is used
      to trigger an action. There are five variants (color is the only
      difference): <code>default</code>, <code>error</code>,{" "}
      <code>success</code>, <code>warning</code>, <code>highlight</code>.
    </>
  ),
  displayExamples: [
    <IconButton icon={<Icon.Info />} altText="Default" />,
    <IconButton
      icon={<Icon.Info />}
      altText="Success"
      variant={IconButton.variant.success}
    />,
  ],
  examples: [
    {
      title: "Default",
      description: "",
      component: [
        <IconButton icon={<Icon.Info />} altText="Default" />,
        <IconButton icon={<Icon.Info />} altText="Default" disabled />,
      ],
    },
    {
      title: "Success",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Success"
          variant={IconButton.variant.success}
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Success"
          variant={IconButton.variant.success}
          disabled
        />,
      ],
    },
    {
      title: "Error",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Error"
          variant={IconButton.variant.error}
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Error"
          variant={IconButton.variant.error}
          disabled
        />,
      ],
    },
    {
      title: "Warning",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Warning"
          variant={IconButton.variant.warning}
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Warning"
          variant={IconButton.variant.warning}
          disabled
        />,
      ],
    },
    {
      title: "Highlight",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Highlight"
          variant={IconButton.variant.highlight}
          disabled
        />,
      ],
    },
    {
      title: "Custom color",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Custom color"
          customColor="#f0f"
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Custom color"
          customColor="#f0f"
          disabled
        />,
      ],
    },
    {
      title: "Custom size",
      description: "",
      component: [
        <IconButton
          icon={<Icon.Info />}
          altText="Custom size"
          customSize="2rem"
        />,
        <IconButton
          icon={<Icon.Info />}
          altText="Custom size"
          customSize="2rem"
          disabled
        />,
      ],
    },
  ],
  props: [
    {
      prop: "icon",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "The icon element",
    },
    {
      prop: "altText",
      type: ["string"],
      default: null,
      optional: false,
      description: "Alternative text to show on hover",
    },
    {
      prop: "variant",
      type: ["default", "error", "success", "warning", "highlight"],
      default: "default",
      optional: true,
      description: "Variant of the component",
    },
    {
      prop: "customColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Set custom color of the component",
    },
    {
      prop: "customSize",
      type: ["string"],
      default: null,
      optional: true,
      description: "Set custom size of the component",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
