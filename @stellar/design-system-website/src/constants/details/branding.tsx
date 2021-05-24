import { ProjectLogo } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const branding: ComponentDetails = {
  id: ComponentDetailsId.branding,
  title: "Branding",
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  displayExamples: [
    <ProjectLogo link="https://stellar.org" title="Project name" />,
  ],
  examples: [
    {
      title: "Project logo",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <ProjectLogo link="https://stellar.org" title="Project name" />,
      ],
    },
  ],
  props: [
    {
      prop: "title",
      type: ["string"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "link",
      type: ["string"],
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
