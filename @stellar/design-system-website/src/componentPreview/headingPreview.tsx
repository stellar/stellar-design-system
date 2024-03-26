import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const headingPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "as",
      options: [
        {
          value: "h1",
          label: "h1",
        },
        {
          value: "h2",
          label: "h2",
        },
        {
          value: "h3",
          label: "h3",
        },
        {
          value: "h4",
          label: "h4",
        },
        {
          value: "h5",
          label: "h5",
        },
        {
          value: "h6",
          label: "h6",
        },
      ],
    },
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
        {
          value: "xl",
          label: "XL",
        },
      ],
    },
    {
      type: "select",
      prop: "weight",
      options: [
        {
          value: "regular",
          label: "Regular",
        },
        {
          value: "medium",
          label: "Medium",
        },
        {
          value: "semi-bold",
          label: "Semi-Bold",
        },
        {
          value: "bold",
          label: "Bold",
        },
      ],
    },
  ],
};
