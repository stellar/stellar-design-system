import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const captionPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "size",
      options: [
        {
          value: "xs",
          label: "xs",
        },
        {
          value: "sm",
          label: "sm",
        },
        {
          value: "md",
          label: "md",
        },
        {
          value: "lg",
          label: "lg",
        },
      ],
    },
  ],
};
