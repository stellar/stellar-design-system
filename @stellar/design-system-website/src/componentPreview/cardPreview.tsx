import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const cardPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "variant",
      options: [
        {
          value: "primary",
          label: "Primary",
        },
        {
          value: "secondary",
          label: "Secondary",
        },
      ],
    },
    {
      type: "select",
      prop: "borderRadiusSize",
      options: [
        {
          value: "md",
          label: "Medium radius",
        },
        {
          value: "sm",
          label: "Small radius",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "noPadding",
      label: "No padding",
    },
  ],
};
