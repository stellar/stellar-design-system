import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const radioButtonPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "fieldSize",
      options: [
        {
          value: "md",
          label: "MD",
        },
        {
          value: "sm",
          label: "SM",
        },
        {
          value: "xs",
          label: "XS",
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
