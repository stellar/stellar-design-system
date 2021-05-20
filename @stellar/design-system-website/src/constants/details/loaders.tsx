import { Loader } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const loaders: ComponentDetails = {
  id: ComponentDetailsId.loaders,
  title: "Loaders",
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [<Loader />, <Loader size="3rem" />],
    },
  ],
  props: [
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
