import { Tooltip } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const tooltips: ComponentDetails = {
  id: ComponentDetailsId.tooltips,
  title: "Tooltips",
  description: `Tooltip is used to display info in a bubble.`,
  shortDescription: "Tooltip is used to display info in a bubble",
  examples: [
    {
      title: "Tooltip",
      description: "Simple tooltip",
      component: [<Tooltip isVisible={true}>Tooltip text</Tooltip>],
    },
  ],
  props: [
    {
      prop: "isVisible",
      type: ["boolean"],
      default: null,
      optional: false,
      description: "Flag to show or hide the tooltip",
    },
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Tooltip content",
    },
    {
      prop: "className",
      type: ["string"],
      default: null,
      optional: true,
      description: "CSS class name for custom styles",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
