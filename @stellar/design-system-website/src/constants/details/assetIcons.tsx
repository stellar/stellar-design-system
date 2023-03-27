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
              image:
                "https://cryptologos.cc/logos/usd-coin-usdc-logo.svg?v=024",
              altText: "USDC",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
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
      ],
    },
    {
      title: "Asset pair",
      description: "",
      component: [
        <AssetIcon
          source={[
            {
              image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024",
              altText: "BTC",
            },
            {
              image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024",
              altText: "ETH",
              imageSize: "80%",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
        <AssetIcon
          source={[
            {
              image:
                "https://cryptologos.cc/logos/basic-attention-token-bat-logo.png?v=024",
              altText: "BAT",
              imageSize: "70%",
            },
            {
              image: "https://cryptologos.cc/logos/kusama-ksm-logo.png?v=024",
              altText: "KSM",
            },
          ]}
          borderColor="var(--color-gray-10)"
        />,
      ],
    },
  ],
  // TODO: update props
  props: [
    {
      prop: "source",
      type: ["AvatarSource[]"],
      default: null,
      optional: false,
      description: "Image URL or SVG source",
    },
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "Size of the avatar",
    },
    {
      prop: "borderColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Border color of the avatar",
    },
    // Adding a sub-title to indicate AvatarSource types
    {
      prop: "AvatarSource",
      type: [],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "image",
      type: ["string", "React.ReactNode", "undefined"],
      default: null,
      optional: false,
      description: "Image source",
    },
    {
      prop: "altText",
      type: ["string"],
      default: null,
      optional: false,
      description: "Image title",
    },
    {
      prop: "backgroundColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Background color",
    },
    {
      prop: "iconColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Icon color, applies only to SVG",
    },
    {
      prop: "isFullSizeImage",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Stretch image, applies only to URL",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
