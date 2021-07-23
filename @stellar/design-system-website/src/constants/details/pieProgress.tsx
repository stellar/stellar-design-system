import { PieProgress } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const pieProgress: ComponentDetails = {
  id: ComponentDetailsId.pieProgress,
  title: "Pie progress",
  description: `Pie chart to show state progress (passed, failed, in progress).`,
  shortDescription: "Pie chart to show state progress",
  examples: [
    {
      title: "Custom background color and size",
      description: "Pie progress with four steps (two passed and one failed).",
      component: [
        <PieProgress
          total={4}
          passed={2}
          failed={1}
          customBackgroundColor="var(--pal-example-details)"
          customSize="3rem"
        />,
      ],
    },
  ],
  props: [
    {
      prop: "total",
      type: ["number"],
      default: null,
      optional: false,
      description: "Number of total steps",
    },
    {
      prop: "passed",
      type: ["number"],
      default: null,
      optional: false,
      description: "Number of passed steps",
    },
    {
      prop: "failed",
      type: ["number"],
      default: null,
      optional: false,
      description: "Number of failed steps",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
