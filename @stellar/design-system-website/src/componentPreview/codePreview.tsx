import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const codePreview: ComponentPreview = {
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
      ],
    },
  ],
};
