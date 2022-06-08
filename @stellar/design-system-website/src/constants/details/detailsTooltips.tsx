import { DetailsTooltip, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const detailsTooltips: ComponentDetails = {
  id: ComponentDetailsId.detailsTooltips,
  title: "Details tooltips",
  description: `Details tooltip is an info button with a tooltip.`,
  shortDescription: "Info button with a tooltip",
  examples: [
    {
      title: "Default tooltip",
      description: "Tooltip is positioned on the left.",
      component: [
        <DetailsTooltip details="More information to display inside the tooltip">
          <span>Info element</span>
        </DetailsTooltip>,
      ],
    },
    {
      title: "Question tooltip",
      description: "With custom SVG icon.",
      component: [
        <DetailsTooltip
          details="More information to display inside the tooltip"
          customIcon={<Icon.HelpCircle />}
        >
          <span>Question element</span>
        </DetailsTooltip>,
      ],
    },
  ],
  props: [
    {
      prop: "details",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Content of the tooltip",
    },
    {
      prop: "children",
      type: ["ReactElement"],
      default: null,
      optional: false,
      description: "Element to attach the info button to",
    },
    {
      prop: "isInline",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Is info element inline (in a sentence, for example)",
    },
    {
      prop: "altText",
      type: ["string"],
      default: "Learn more",
      optional: true,
      description: "Text to display when info button is hovered",
    },
    {
      prop: "tooltipPosition",
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
      description: "Position of the tooltip relative to the element",
    },
    {
      prop: "customIcon",
      type: ["ReactNode"],
      default: "<Icon.Info />",
      optional: true,
      description: "SVG icon of the info button",
    },
    {
      prop: "customColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Color of the info button",
    },
    {
      prop: "customSize",
      type: ["string"],
      default: null,
      optional: true,
      description: "Size of the info button",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
