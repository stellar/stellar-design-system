import { TextLink, Tooltip } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const tooltips: ComponentDetails = {
  id: ComponentDetailsId.tooltips,
  title: "Tooltips",
  description: (
    <>
      Tooltip is used to display info in a bubble. We are using awesome{" "}
      <TextLink href="https://popper.js.org/">Popper</TextLink> for tooltip
      positioning.
    </>
  ),
  shortDescription: "Tooltip is used to display info in a bubble",
  examples: [
    {
      title: "Tooltip",
      description: "Simple tooltip",
      component: [
        <Tooltip isVisible={true} content="Tooltip content" disableClick>
          Tooltip trigger
        </Tooltip>,
      ],
    },
  ],
  props: [
    {
      prop: "content",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Content of tooltip bubble",
    },
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Tooltip trigger component",
    },
    {
      prop: "position",
      type: [
        "bottom",
        "bottom-start",
        "bottom-end",
        "left",
        "left-start",
        "left-end",
        "right",
        "right-start",
        "right-end",
        "top",
        "top-start",
        "top-end",
      ],
      default: "bottom",
      optional: true,
      description: "Position of tooltip",
    },
    {
      prop: "isVisible",
      type: ["boolean"],
      default: "false",
      optional: true,
      description: "Manually set tooltip visibility",
    },
    {
      prop: "disableClick",
      type: ["boolean"],
      default: "false",
      optional: true,
      description: "Disabling clicks will not trigger tooltip",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
