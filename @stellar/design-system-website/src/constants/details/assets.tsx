import { Icon, Logo } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const assets: ComponentDetails = {
  id: ComponentDetailsId.assets,
  title: "Assets",
  description: `Collection of icon and logo assets.`,
  shortDescription:
    "Collection of icon and partner logo assets used across product and brand",
  examples: [
    {
      title: "Icons",
      description: "SVG icon components, which are styled in CSS.",
      component: [
        <Icon.ArrowLeft />,
        <Icon.ArrowRight />,
        <Icon.Bubble />,
        <Icon.Calendar />,
        <Icon.Checkmark />,
        <Icon.Close />,
        <Icon.Copy />,
        <Icon.Download />,
        <Icon.Dropdown />,
        <Icon.Edit />,
        <Icon.Error />,
        <Icon.Help />,
        <Icon.Info />,
        <Icon.Moon />,
        <Icon.Receive />,
        <Icon.Remove />,
        <Icon.Search />,
        <Icon.Send />,
        <Icon.Settings />,
        <Icon.Success />,
        <Icon.Sun />,
        <Icon.Warning />,
      ],
      useGridLayout: true,
    },
    {
      title: "Logos",
      description:
        "SVG logo components, which can be styled in CSS if necessary.",
      component: [
        <Logo.Albedo />,
        <Logo.Freighter />,
        <Logo.GitHub />,
        <Logo.Ledger />,
        <Logo.Stellar />,
        <Logo.Trezor />,
      ],
      useGridLayout: true,
    },
  ],
  props: [],
  externalProps: {
    link: "",
    label: "",
  },
};
