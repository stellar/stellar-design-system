import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const assetIconPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "source",
      customValue: [
        {
          altText: "XLM",
          image: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=024",
          imageSize: "80%",
        },
        {
          altText: "USDC",
          image: "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
        },
      ],
      options: [
        {
          value: "",
          label: "Single",
        },
        {
          value: "pair",
          label: "Pair",
        },
      ],
    },
  ],
};
