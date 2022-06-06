import { Card } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const cards: ComponentDetails = {
  id: ComponentDetailsId.cards,
  title: "Cards",
  description: `Container with flexible dimensions for any type of content.`,
  shortDescription: "Container for any type of content",
  examples: [
    {
      title: "Default card",
      description: "",
      component: [<Card>Content</Card>],
    },
    {
      title: "Card without padding and shadow",
      description: "",
      component: [
        <Card noPadding noShadow>
          Content
        </Card>,
      ],
    },
    {
      title: "Card with highlight",
      description: "",
      component: [<Card variant={Card.variant.highlight}>Content</Card>],
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
      prop: "noPadding",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Remove card padding",
    },
    {
      prop: "noShadow",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Remove card shadow",
    },
    {
      prop: "variant",
      type: ["default", "highlight"],
      default: "default",
      optional: true,
      description: "Variant of the card",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
