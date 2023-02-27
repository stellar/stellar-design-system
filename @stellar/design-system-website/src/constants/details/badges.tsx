import { Badge } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const badges: ComponentDetails = {
  id: ComponentDetailsId.badges,
  title: "Badges",
  description: (
    <>
      <code>Badge</code> is used to label or categorize an item. There are five
      variants of the <code>Tag</code>: <code>default</code>,{" "}
      <code>success</code>, <code>warning</code>, <code>pending</code>, and{" "}
      <code>error</code>.
    </>
  ),
  shortDescription: "Used to label or categorize items",
  examples: [
    {
      title: "Default",
      description: "",
      component: [<Badge>Label</Badge>],
    },
    {
      title: "Success",
      description: "",
      component: [<Badge variant="success">Label</Badge>],
    },
    {
      title: "Warning",
      description: "",
      component: [<Badge variant="warning">Label</Badge>],
    },
    {
      title: "Pending",
      description: "",
      component: [<Badge variant="pending">Label</Badge>],
    },
    {
      title: "Error",
      description: "",
      component: [<Badge variant="error">Label</Badge>],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string"],
      default: null,
      optional: false,
      description: "Label of the badge",
    },
    {
      prop: "variant",
      type: ["default", "success", "warning", "pending", "error"],
      default: "default",
      optional: true,
      description: "Variant of the badge",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
