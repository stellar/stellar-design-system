import { Input, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

import { Field } from "./mocks";

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
      component: [
        <Input fieldSize="md" id="input-1" />,
        <Input fieldSize="md" id="input-2" disabled />,
      ],
    },
    {
      title: "Input with label and placeholder, medium",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-3"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="md"
          id="input-4"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
      ],
    },
    {
      title: "Input with label and placeholder, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-5"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="sm"
          id="input-6"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
      ],
    },
    {
      title: "Input with label and placeholder, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-7"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="xs"
          id="input-8"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
      ],
    },
    {
      title: "Input with label and value",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-9"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
        />,
        <Input
          fieldSize="md"
          id="input-10"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          isLabelUppercase
        />,
        <Input
          fieldSize="md"
          id="input-11"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          disabled
        />,
      ],
    },
    {
      title: "Input with label and note / error, medium",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-12"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="md"
          id="input-13"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
      ],
    },
    {
      title: "Input with label and note / error, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-14"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="sm"
          id="input-15"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
      ],
    },
    {
      title: "Input with label and note / error, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-16"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="xs"
          id="input-17"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
      ],
    },
    {
      title: "Input with elements, medium",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-18"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="md"
          id="input-19"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
      ],
    },
    {
      title: "Input with elements, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-20"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="sm"
          id="input-21"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
      ],
    },
    {
      title: "Input with elements, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-22"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="xs"
          id="input-23"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
      ],
    },
    {
      title: "Input with custom input",
      description: "",
      component: [
        <Input
          fieldSize="md"
          customInput={<Field />}
          id="input-24"
          label="Label"
          placeholder="Placeholder"
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
      prop: "fieldSize",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the input",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the input",
    },
    {
      prop: "isLabelUppercase",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Make label uppercase",
    },
    {
      prop: "rightElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Right side element of the input",
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
    {
      prop: "customInput",
      type: ["React.ReactNode"],
      default: null,
      optional: true,
      description:
        "Use a specific input rather than a generic HTML input (useful for Formik or otherwise controlled inputs)",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
