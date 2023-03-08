import { Banner } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const banners: ComponentDetails = {
  id: ComponentDetailsId.banners,
  title: "Banners",
  description: (
    <>
      Use banner to display messages at the top of the page, stretching across
      the whole width. There are four variants <code>info</code>,{" "}
      <code>success</code>, <code>error</code>, and <code>warning</code>.
    </>
  ),
  shortDescription: "Use banners to display messages at the top of the page",
  examples: [
    {
      title: "Info",
      description: "",
      component: [<Banner variant={Banner.variant.info}>Info message</Banner>],
    },
    {
      title: "Success",
      description: "",
      component: [
        <Banner variant={Banner.variant.success}>Success message</Banner>,
      ],
    },
    {
      title: "Error",
      description: "",
      component: [
        <Banner variant={Banner.variant.error}>Error message</Banner>,
      ],
    },
    {
      title: "Warning",
      description: "",
      component: [
        <Banner variant={Banner.variant.warning}>Warning message</Banner>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Message to display in the banner",
    },
    {
      prop: "variant",
      type: ["info", "success", "error", "warning"],
      default: null,
      optional: false,
      description: "Variant of the banner",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
