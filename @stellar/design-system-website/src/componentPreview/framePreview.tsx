import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const framePreview: ComponentPreview = {
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
          value: "brand",
          label: "Brand",
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
          value: "error",
          label: "Error",
        },
        {
          value: "gold",
          label: "Gold",
        },
        {
          value: "navy",
          label: "Navy",
        },
        {
          value: "teal",
          label: "Teal",
        },
        {
          value: "mint",
          label: "Mint",
        },
        {
          value: "lime",
          label: "Lime",
        },
        {
          value: "pink",
          label: "Pink",
        },
      ],
    },
    {
      type: "select",
      prop: "shape",
      options: [
        {
          value: "round",
          label: "Round",
        },
        {
          value: "square",
          label: "Square",
        },
      ],
    },
    {
      type: "select",
      prop: "size",
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
  ],
};
