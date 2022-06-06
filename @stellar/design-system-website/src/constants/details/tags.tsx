import { Tag } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const tags: ComponentDetails = {
  id: ComponentDetailsId.tags,
  title: "Tags",
  description: (
    <>
      <code>Tag</code> is used to label or categorize an item. There are five
      variants of the <code>Tag</code>: <code>default</code>, <code>error</code>
      , <code>success</code>, <code>warning</code>, and <code>highlight</code>.
    </>
  ),
  shortDescription: "Used to label or categorize items",
  examples: [
    {
      title: "Default",
      description: "",
      component: [<Tag>Label</Tag>],
    },
    {
      title: "Highlight",
      description: "",
      component: [<Tag variant={Tag.variant.highlight}>Label</Tag>],
    },
    {
      title: "Success",
      description: "",
      component: [<Tag variant={Tag.variant.success}>Label</Tag>],
    },
    {
      title: "Error",
      description: "",
      component: [<Tag variant={Tag.variant.error}>Label</Tag>],
    },
    {
      title: "Warning",
      description: "",
      component: [<Tag variant={Tag.variant.warning}>Label</Tag>],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string"],
      default: null,
      optional: false,
      description: "Label of the tag",
    },
    {
      prop: "variant",
      type: ["default", "error", "success", "warning", "highlight"],
      default: "default",
      optional: true,
      description: "Variant of the component",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
