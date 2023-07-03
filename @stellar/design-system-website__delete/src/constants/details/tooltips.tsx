import { Link, Tooltip } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const tooltips: ComponentDetails = {
  id: ComponentDetailsId.tooltips,
  title: "Tooltips",
  description: (
    <>
      Tooltip is used to display info in a bubble. We are using{" "}
      <Link href="https://floating-ui.com/">Floating UI</Link> for tooltip
      positioning.
    </>
  ),
  shortDescription: "Tooltip is used to display info in a bubble",
  examples: [
    {
      title: "Tooltip",
      description: "Simple tooltip",
      component: [
        <Tooltip isVisible={true} triggerEl={<>Tooltip trigger</>}>
          Lorem ipsum dolor sit
        </Tooltip>,
        <Tooltip
          isVisible={true}
          triggerEl={<>Tooltip trigger no contrast</>}
          isContrast={false}
        >
          Lorem ipsum dolor sit
        </Tooltip>,
      ],
    },
    {
      title: "Tooltip",
      description: "Tooltip with long content",
      component: [
        <Tooltip isVisible={true} triggerEl={<>Tooltip trigger</>}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
          in. Mollitia assumenda dolorem amet.
        </Tooltip>,
      ],
    },
  ],
  props: [
    {
      prop: "triggerEl",
      type: ["JSX.Element"],
      default: null,
      optional: false,
      description: "Element that shows/hides tooltip",
    },
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Content of the tooltip",
    },
    {
      prop: "placement",
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
      default: "right",
      optional: true,
      description: "Placement of tooltip relative to trigger element",
    },
    {
      prop: "isVisible",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Manually show/hide tooltip",
    },
    {
      prop: "isContrast",
      type: ["boolean"],
      default: "true",
      optional: true,
      description: "Use contrast theme color",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
