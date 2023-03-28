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
        <Input fieldSize="md" id="input-d-1" />,
        <Input fieldSize="md" id="input-d-2" disabled />,
      ],
    },
    {
      title: "Input with label and placeholder, medium",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-md-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="md"
          id="input-md-2"
          label="Label"
          placeholder="Placeholder"
          isExtraPadding
        />,
        <Input
          fieldSize="md"
          id="input-md-3"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Input
          fieldSize="md"
          id="input-md-4"
          label="Label"
          placeholder="Placeholder"
          isPill
        />,
      ],
    },
    {
      title: "Input with label and placeholder, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-sm-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="sm"
          id="input-sm-2"
          label="Label"
          placeholder="Placeholder"
          isExtraPadding
        />,
        <Input
          fieldSize="sm"
          id="input-sm-3"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Input
          fieldSize="sm"
          id="input-sm-4"
          label="Label"
          placeholder="Placeholder"
          isPill
        />,
      ],
    },
    {
      title: "Input with label and placeholder, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-xs-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Input
          fieldSize="xs"
          id="input-xs-2"
          label="Label"
          placeholder="Placeholder"
          isExtraPadding
        />,
        <Input
          fieldSize="xs"
          id="input-xs-3"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Input
          fieldSize="xs"
          id="input-xs-4"
          label="Label"
          placeholder="Placeholder"
          isPill
        />,
      ],
    },
    {
      title: "Input with label and value",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-md-v-1"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
        />,
        <Input
          fieldSize="md"
          id="input-md-v-2"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          isLabelUppercase
        />,
        <Input
          fieldSize="md"
          id="input-md-v-3"
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
          id="input-md-ln-1"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="md"
          id="input-md-ln-2"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
        <Input
          fieldSize="md"
          id="input-md-ln-3"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          isError={true}
        />,
      ],
    },
    {
      title: "Input with label and note / error, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-sm-ln-1"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="sm"
          id="input-sm-ln-2"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
        <Input
          fieldSize="sm"
          id="input-sm-ln-3"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          isError={true}
        />,
      ],
    },
    {
      title: "Input with label and note / error, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-xs-ln-1"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />,
        <Input
          fieldSize="xs"
          id="input-xs-ln-2"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />,
        <Input
          fieldSize="xs"
          id="input-xs-ln-3"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          isError={true}
        />,
      ],
    },
    {
      title: "Input with elements, medium",
      description: "",
      component: [
        <Input
          fieldSize="md"
          id="input-md-e-1"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="md"
          id="input-md-e-2"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
        <Input
          fieldSize="md"
          id="input-md-e-3"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
          isPill
        />,
      ],
    },
    {
      title: "Input with elements, small",
      description: "",
      component: [
        <Input
          fieldSize="sm"
          id="input-sm-e-1"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="sm"
          id="input-sm-e-2"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
        <Input
          fieldSize="sm"
          id="input-sm-e-3"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
          isPill
        />,
      ],
    },
    {
      title: "Input with elements, extra-small",
      description: "",
      component: [
        <Input
          fieldSize="xs"
          id="input-xs-e-1"
          label="Label"
          placeholder="Placeholder"
          rightElement="USDC"
        />,
        <Input
          fieldSize="xs"
          id="input-xs-e-2"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
        />,
        <Input
          fieldSize="xs"
          id="input-xs-e-3"
          label="Label"
          placeholder="Placeholder"
          rightElement={<Icon.Check />}
          isPill
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
          id="input-c-1"
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
      prop: "isPill",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Pill shaped input",
    },
    {
      prop: "isError",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Input error without a message",
    },
    {
      prop: "isExtraPadding",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Input with extra padding",
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
