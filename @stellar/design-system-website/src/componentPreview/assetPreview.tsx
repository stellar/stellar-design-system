import { ComponentPreview } from "@site/src/components/PreviewBlock";

const updateSourceTwo = {
  prop: "sourceTwo",
  value: {
    altText: "USDC",
    image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
  },
};

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
          updateRelated: {
            prop: "sourceTwo",
            value: undefined,
          },
        },
        {
          value: "swap",
          label: "Swap",
          updateRelated: updateSourceTwo,
        },
        {
          value: "pair",
          label: "Pair",
          updateRelated: updateSourceTwo,
        },
        {
          value: "platform",
          label: "Platform",
          updateRelated: updateSourceTwo,
        },
      ],
    },
  ],
};
