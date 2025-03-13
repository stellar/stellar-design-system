import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const appPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "app",
      options: [
        {
          value: "blend",
          label: "Blend",
        },
        {
          value: "phoenix",
          label: "Phoenix",
        },
        {
          value: "soroswap",
          label: "Soroswap",
        },
        {
          value: "stellar",
          label: "Stellar",
        },
        {
          value: "stellarx",
          label: "StellarX",
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
        {
          value: "xl",
          label: "XL",
        },
      ],
    },
  ],
};
