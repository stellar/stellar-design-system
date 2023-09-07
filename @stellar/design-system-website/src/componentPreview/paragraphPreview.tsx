import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const paragraphPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "size",
      options: [
        {
          value: "xs",
          label: "XS",
        },
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
      prop: "asDiv",
      label: "As div",
    },
  ],
};
