import { Icon, Logo } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const assets: ComponentDetails = {
  id: ComponentDetailsId.assets,
  title: "Assets",
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  examples: [
    {
      title: "Icons",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
        <Icon.Receive />,
        <Icon.Remove />,
        <Icon.Search />,
        <Icon.Send />,
        <Icon.Settings />,
      ],
    },
    {
      title: "Logos",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Logo.Albedo />,
        <Logo.Freighter />,
        <Logo.GitHub />,
        <Logo.Ledger />,
        <Logo.Stellar className="stellar" />,
        <Logo.Trezor />,
      ],
    },
  ],
  props: [],
  externalProps: {
    link: "",
    label: "",
  },
};
