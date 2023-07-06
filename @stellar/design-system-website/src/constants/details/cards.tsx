import { Card } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const cards: ComponentDetails = {
  id: ComponentDetailsId.cards,
  title: "Cards",
  description: `Container with flexible dimensions for any type of content.`,
  shortDescription: "Container for any type of content",
  examples: [
    {
      title: "Default/primary card",
      description: "",
      component: [<Card>Content</Card>],
    },
    {
      title: "Small border radius",
      description: "",
      component: [<Card borderRadiusSize="sm">Content</Card>],
    },
    {
      title: "Card without padding and shadow",
      description: "",
      component: [<Card noPadding>Content</Card>],
    },
    {
      title: "Highlighted card",
      description: "",
      component: [<Card variant="secondary">Content</Card>],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Card content",
    },
    {
      prop: "variant",
      type: ["primary", "secondary"],
      default: "primary",
      optional: true,
      description: "Variant of the card",
    },
    {
      prop: "noPadding",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Remove card padding",
    },
    {
      prop: "borderRadiusSize",
      type: ["sm", "md"],
      default: "md",
      optional: true,
      description: "Card border radius",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
