import { CopyText, Link, IconButton } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const copyTexts: ComponentDetails = {
  id: ComponentDetailsId.copyTexts,
  title: "Copy text",
  description: (
    <>
      Use <code>CopyText</code> component to copy a string. Done action label
      can be displayed in a tooltip, by default it will replace component’s
      label inline. We’re using{" "}
      <Link href="https://github.com/nkbt/react-copy-to-clipboard">
        react-copy-to-clipboard
      </Link>{" "}
      to do the copy magic.
    </>
  ),
  shortDescription: "Copy text component with optional tooltip",
  examples: [
    {
      title: "With tooltip",
      description: "Done label is shown in the tooltip instead of inline",
      component: [
        <CopyText textToCopy="Test copy with tooltip">
          Copy with tooltip
        </CopyText>,
      ],
    },
    {
      title: "Using Icon button copy preset",
      description: "Text link with copy icon and tooltip",
      component: [
        <CopyText textToCopy="Test copy preset" tooltipPlacement="right">
          <IconButton
            preset={IconButton.preset.copy}
            variant={IconButton.variant.highlight}
          />
        </CopyText>,
      ],
    },
  ],
  props: [
    {
      prop: "textToCopy",
      type: ["string"],
      default: null,
      optional: false,
      description: "Text to copy",
    },
    {
      prop: "doneLabel",
      type: ["string"],
      default: "Copied",
      optional: true,
      description: "Label/text to display when copy action is done",
    },
    {
      prop: "tooltipPlacement",
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
      description: "Position of the tooltip",
    },
    {
      prop: "title",
      type: ["string"],
      default: "Copy",
      optional: true,
      description: "Title text to show on hover",
    },
    {
      prop: "children",
      type: ["ReactElement", "string"],
      default: null,
      optional: false,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
