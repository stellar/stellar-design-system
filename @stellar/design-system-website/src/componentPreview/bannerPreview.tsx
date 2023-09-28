import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const bannerPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "variant",
      options: [
        {
          value: "default",
          label: "Default",
        },
        {
          value: "primary",
          label: "Primary",
        },
        {
          value: "success",
          label: "Success",
        },
        {
          value: "error",
          label: "Error",
        },
        {
          value: "warning",
          label: "Warning",
        },
      ],
    },
  ],
};
