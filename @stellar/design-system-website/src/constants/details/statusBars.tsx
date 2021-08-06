import { StatusBar } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const statusBars: ComponentDetails = {
  id: ComponentDetailsId.statusBars,
  title: "Status bars",
  description: (
    <>
      Use status bars to display messages at the top of the page, stretching
      across the whole width. There are four variants <code>info</code>,{" "}
      <code>success</code>, <code>error</code>, and <code>warning</code>.
    </>
  ),
  shortDescription:
    "Use status bars to display messages at the top of the page",
  examples: [
    {
      title: "Info",
      description: "",
      component: [
        <StatusBar variant={StatusBar.variant.info}>Info message</StatusBar>,
      ],
    },
    {
      title: "Success",
      description: "",
      component: [
        <StatusBar variant={StatusBar.variant.success}>
          Success message
        </StatusBar>,
      ],
    },
    {
      title: "Error",
      description: "",
      component: [
        <StatusBar variant={StatusBar.variant.error}>Error message</StatusBar>,
      ],
    },
    {
      title: "Warning",
      description: "",
      component: [
        <StatusBar variant={StatusBar.variant.warning}>
          Warning message
        </StatusBar>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Message to display in the status bar",
    },
    {
      prop: "variant",
      type: ["info", "success", "error", "warning"],
      default: null,
      optional: false,
      description: "Variant of the status bar",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
