import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const loaderPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "size",
      options: [
        {
          value: "",
          label: "Default size",
        },
        {
          value: "2rem",
          label: "2 rem",
        },
        {
          value: "3rem",
          label: "3 rem",
        },
      ],
    },
  ],
};
