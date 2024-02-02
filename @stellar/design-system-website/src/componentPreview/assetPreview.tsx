import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const assetPreview: ComponentPreview = {
  options: [
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
    {
      type: "select",
      prop: "variant",
      options: [
        {
          value: "single",
          label: "Single",
        },
        {
          value: "swap",
          label: "Swap",
        },
        {
          value: "pair",
          label: "Pair",
        },
        {
          value: "platform",
          label: "Platform",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "sourceTwo",
      label: "Add second asset",
      customValue: {
        altText: "USDC",
        image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
      },
    },
  ],
};
