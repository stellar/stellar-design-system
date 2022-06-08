import { Loader } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const loaders: ComponentDetails = {
  id: ComponentDetailsId.loaders,
  title: "Loaders",
  description: `
      Loading state indicators.`,
  shortDescription: "Loading state indicators",
  examples: [
    {
      title: "Default",
      description: (
        <>
          Loader component color is set in CSS, and the size can also be set in
          CSS or through the <code>size</code> prop.
        </>
      ),
      component: [<Loader />, <Loader size="3rem" />],
    },
  ],
  props: [
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "Set custom size of the component",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
