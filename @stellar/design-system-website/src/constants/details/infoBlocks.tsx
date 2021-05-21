import { InfoBlock } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const infoBlocks: ComponentDetails = {
  id: ComponentDetailsId.infoBlocks,
  title: "Info blocks",
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
      title: "",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <InfoBlock>Information (default) block</InfoBlock>,
        <InfoBlock variant={InfoBlock.variant.error}>Error block</InfoBlock>,
        <InfoBlock variant={InfoBlock.variant.warning}>
          <p>Warning block</p>
        </InfoBlock>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "React.ReactNode"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "variant",
      type: ["info", "error", "warning"],
      default: "info",
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
