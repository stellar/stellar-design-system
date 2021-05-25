import { IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const iconButtons: ComponentDetails = {
  id: ComponentDetailsId.iconButtons,
  title: "Icon buttons",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <IconButton icon={<Icon.Info />} altText="Default" />,
        <IconButton icon={<Icon.Info />} altText="Default" disabled />,
      ],
    },
    {
      title: "Success",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      type: ["React.ReactNode"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "altText",
      type: ["string"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "variant",
      type: ["default", "error", "success", "warning", "highlight"],
      default: "default",
      optional: true,
      description: "",
    },
    {
      prop: "customColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "customSize",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
