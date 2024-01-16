import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const textPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "as",
      options: [
        {
          value: "p",
          label: "p",
        },
        {
          value: "div",
          label: "div",
        },
        {
          value: "span",
          label: "span",
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
