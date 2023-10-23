import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const captionPreview: ComponentPreview = {
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
  ],
};
