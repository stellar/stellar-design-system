import { AssetIcon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const assetIcons: ComponentDetails = {
  id: ComponentDetailsId.assetIcons,
  title: "Asset icons",
  description: `Asset image displayed in a circle from a URL source. The component accepts multiple sources to show currency pair, for example.`,
  shortDescription: "Asset image displayed in a circle",
  examples: [
    {
      title: "Single asset",
      description: "",
      component: [
        <AssetIcon
          source={[
            {
              image: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=024",
              altText: "XLM",
              imageSize: "80%",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
        <AssetIcon
          source={[
            {
              image:
                "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
              altText: "USDC",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
      ],
    },
    {
      title: "Asset pair",
      description: "",
      component: [
        <AssetIcon
          source={[
            {
              image: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=024",
              altText: "XLM",
              imageSize: "80%",
            },
            {
              image:
                "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
              altText: "USDC",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
      ],
    },
  ],
  props: [
    {
      prop: "source",
      type: ["AssetIconSource[]"],
      default: null,
      optional: false,
      description: "Asset source data",
    },
    {
      prop: "borderColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Asset border color",
    },
    // Adding a sub-title to indicate AssetIconSource types
    {
      prop: "AssetIconSource",
      type: [],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "image",
      type: ["string"],
      default: null,
      optional: false,
      description: "Image URL",
    },
    {
      prop: "altText",
      type: ["string"],
      default: null,
      optional: false,
      description: "Image alt text",
    },
    {
      prop: "imageSize",
      type: ["string"],
      default: null,
      optional: true,
      description: "Custom size of the image inside the circle",
    },
    {
      prop: "backgroundColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Custom background color",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
