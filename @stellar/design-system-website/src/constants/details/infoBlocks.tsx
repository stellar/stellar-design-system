import { InfoBlock } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const infoBlocks: ComponentDetails = {
  id: ComponentDetailsId.infoBlocks,
  title: "Info blocks",
  description: (
    <>
      Use info blocks or status messages to draw user attention. There are four
      variants <code>info</code>, <code>success</code>, <code>error</code>, and{" "}
      <code>warning</code>.
    </>
  ),
  displayExamples: [
    <InfoBlock>Information (default) block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.success}>Success block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.error}>Error block</InfoBlock>,
    <InfoBlock variant={InfoBlock.variant.warning}>Warning block</InfoBlock>,
  ],
  examples: [
    {
      title: "Info (default)",
      description: "",
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
      description: "",
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
      description: "",
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
      description: "",
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
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Content of the component",
    },
    {
      prop: "variant",
      type: ["info", "success", "error", "warning"],
      default: "info",
      optional: true,
      description: "Variant of the component",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
