import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const tablePreview: ComponentPreview = {
  options: [
    {
      type: "checkbox",
      prop: "hideNumberColumn",
      label: "Hide number column",
    },
    {
      type: "checkbox",
      prop: "isLoading",
      label: "Loading",
    },
    {
      type: "select",
      prop: "data",
      customValue: [],
      options: [
        {
          value: "",
          label: "With data",
        },
        {
          value: "no-data",
          label: "Without data",
        },
      ],
    },
  ],
};
