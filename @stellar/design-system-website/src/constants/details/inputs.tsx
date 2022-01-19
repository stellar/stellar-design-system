import { Input, IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const inputs: ComponentDetails = {
  id: ComponentDetailsId.inputs,
  title: "Inputs",
  description: (
    <>
      <code>Input</code> component is a form input element, which inherits all
      native HTML <code>input</code> element attributes.
    </>
  ),
  shortDescription:
    "Form input element, which inherits all native HTML input element attributes",
  examples: [
    {
      title: "Default",
      description: "",
      component: [<Input id="input-1" />, <Input id="input-2" disabled />],
    },
    {
      title: "Input with label and placeholder",
      description: "",
      component: [
        <Input id="input-3" label="Label" placeholder="Placeholder" />,
        <Input id="input-4" label="Label" placeholder="Placeholder" disabled />,
      ],
    },
    {
      title: "Input with label and value",
      description: "",
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
      description: "",
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
      description: "",
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
      description: "ID of the input should be unique",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the input",
    },
    {
      prop: "leftElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Element on the left of the input",
    },
    {
      prop: "rightElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Element on the right of the input",
    },
    {
      prop: "note",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Note message of the input",
    },
    {
      prop: "error",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Error message of the input",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
