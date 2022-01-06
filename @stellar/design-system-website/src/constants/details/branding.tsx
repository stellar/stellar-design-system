import { ProjectLogo } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const branding: ComponentDetails = {
  id: ComponentDetailsId.branding,
  title: "Branding",
  description: `Branding components, such as project logo.`,
  shortDescription: "Branding components, such as project logos",
  examples: [
    {
      title: "Project logo",
      description: "Project’s logo with a name and link.",
      component: [<ProjectLogo title="Project name" />],
    },
  ],
  props: [
    {
      prop: "title",
      type: ["string"],
      default: null,
      optional: false,
      description: "Project name",
    },
    {
      prop: "link",
      type: ["string"],
      default: "/",
      optional: true,
      description: "Project website link",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
