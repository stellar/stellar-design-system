import { InfoBlock } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const infoBlocks: ComponentDetails = {
  id: ComponentDetailsId.infoBlocks,
  title: "Info blocks",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <InfoBlock>Information (default) block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.success}>Success block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.error}>Error block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.warning}>Warning block</InfoBlock>,
  ],
  examples: [
    {
      title: "Information (default)",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <InfoBlock>Information (default) block</InfoBlock>,
        <InfoBlock>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            temporibus possimus quidem cum illum soluta nam delectus corrupti
            modi, nisi cupiditate beatae esse itaque? Voluptate sequi recusandae
            asperiores hic commodi.
          </p>
        </InfoBlock>,
      ],
    },
    {
      title: "Success",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <InfoBlock variant={InfoBlock.variant.success}>
          Success block
        </InfoBlock>,
        <InfoBlock variant={InfoBlock.variant.success}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            temporibus possimus quidem cum illum soluta nam delectus corrupti
            modi, nisi cupiditate beatae esse itaque? Voluptate sequi recusandae
            asperiores hic commodi.
          </p>
        </InfoBlock>,
      ],
    },
    {
      title: "Error",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <InfoBlock variant={InfoBlock.variant.error}>Error block</InfoBlock>,
        <InfoBlock variant={InfoBlock.variant.error}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            temporibus possimus quidem cum illum soluta nam delectus corrupti
            modi, nisi cupiditate beatae esse itaque? Voluptate sequi recusandae
            asperiores hic commodi.
          </p>
        </InfoBlock>,
      ],
    },
    {
      title: "Warning",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <InfoBlock variant={InfoBlock.variant.warning}>
          Warning block
        </InfoBlock>,
        <InfoBlock variant={InfoBlock.variant.warning}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            temporibus possimus quidem cum illum soluta nam delectus corrupti
            modi, nisi cupiditate beatae esse itaque? Voluptate sequi recusandae
            asperiores hic commodi.
          </p>
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
      type: ["info", "success", "error", "warning"],
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
