import { Input, IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const inputs: ComponentDetails = {
  id: ComponentDetailsId.inputs,
  title: "Inputs",
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
      component: [<Input id="input-1" />, <Input id="input-2" disabled />],
    },
    {
      title: "Input with label and placeholder",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Input id="input-3" label="Label" placeholder="Placeholder" />,
        <Input id="input-4" label="Label" placeholder="Placeholder" disabled />,
      ],
    },
    {
      title: "Input with label and value",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Input
          id="input-5"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
        />,
        <Input
          id="input-6"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          disabled
        />,
      ],
    },
    {
      title: "Input with label and note / error",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Input
          id="input-7"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          id="input-8"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
      ],
    },
    {
      title: "Input with elements",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Input
          id="input-9"
          label="Label"
          placeholder="Placeholder"
          rightElement="text"
        />,
        <Input
          id="input-10"
          label="Label"
          placeholder="Placeholder"
          leftElement="text"
        />,
        <Input
          id="input-11"
          label="Label"
          placeholder="Placeholder"
          rightElement={<IconButton icon={<Icon.Info />} altText="Info text" />}
        />,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "label",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "leftElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "rightElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "note",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "error",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
