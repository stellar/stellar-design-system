import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const badgePreview: ComponentPreview = {
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
          value: "success",
          label: "Success",
        },
        {
          value: "warning",
          label: "Warning",
        },
        {
          value: "pending",
          label: "Pending",
        },
        {
          value: "error",
          label: "Error",
        },
      ],
    },
  ],
};
