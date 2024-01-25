import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const radioButtonPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "fieldSize",
      options: [
        {
          value: "sm",
          label: "SM",
        },
        {
          value: "md",
          label: "MD",
        },
        {
          value: "lg",
          label: "LG",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
  ],
};
