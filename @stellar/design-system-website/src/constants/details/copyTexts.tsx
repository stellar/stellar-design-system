import { CopyText, TextLink } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const copyTexts: ComponentDetails = {
  id: ComponentDetailsId.copyTexts,
  title: "Copy text",
  description: (
    <>
      Use <code>CopyText</code> component to copy a string. Done action label
      can be displayed in a tooltip, by default it will replace component’s
      label inline. We’re using{" "}
      <TextLink href="https://github.com/nkbt/react-copy-to-clipboard">
        react-copy-to-clipboard
      </TextLink>{" "}
      to do the copy magic.
    </>
  ),
  shortDescription: "Copy text component with optional tooltip",
  examples: [
    {
      title: "Default",
      description: "Very simple example",
      component: [<CopyText textToCopy="Test copy">Copy</CopyText>],
    },
    {
      title: "With tooltip",
      description: "Done label is shown in the tooltip instead of inline",
      component: [
        <CopyText textToCopy="Test copy" showTooltip>
          Copy with tooltip
        </CopyText>,
      ],
    },
    {
      title: "With copy icon",
      description: "Text link with copy icon and tooltip",
      component: [
        <CopyText
          textToCopy="Test copy"
          showCopyIcon
          showTooltip
          tooltipPosition={CopyText.tooltipPosition.RIGHT}
        >
          <TextLink>Copy</TextLink>
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
      prop: "showCopyIcon",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Flag to enable copy icon",
    },
    {
      prop: "showTooltip",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Flag to enable tooltip",
    },
    {
      prop: "doneLabel",
      type: ["string"],
      default: "Copied",
      optional: true,
      description: "Label/text to display when copy action is done",
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
