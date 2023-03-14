import { Select } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const selects: ComponentDetails = {
  id: ComponentDetailsId.selects,
  title: "Selects",
  description: (
    <>
      <code>Select</code> component is a form select element, which inherits all
      native HTML <code>select</code> element attributes.
    </>
  ),
  shortDescription:
    "Form select element, which inherits all native HTML select element attributes",
  examples: [
    {
      title: "Default",
      description: "",
      component: [
        <Select fieldSize="md" id="select-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="md" id="select-2" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with label, medium",
      description: "",
      component: [
        <Select fieldSize="md" id="select-md-1" label="Label">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="md" id="select-md-2" label="Label" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="md"
          id="select-md-3"
          label="Label"
          isPill
          isLabelUppercase
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with label, small",
      description: "",
      component: [
        <Select fieldSize="sm" id="select-sm-1" label="Label">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="sm" id="select-sm-2" label="Label" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="sm"
          id="select-sm-3"
          label="Label"
          isPill
          isLabelUppercase
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with label, extra-small",
      description: "",
      component: [
        <Select fieldSize="xs" id="select-xs-1" label="Label">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="xs" id="select-xs-2" label="Label" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="xs"
          id="select-xs-3"
          label="Label"
          isPill
          isLabelUppercase
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with note / error, medium",
      description: "",
      component: [
        <Select
          fieldSize="md"
          id="select-md-n-1"
          label="Label"
          note="Note message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="md"
          id="select-md-n-2"
          label="Label"
          error="Error message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="md" id="select-md-n-3" label="Label" isError={true}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with note / error, small",
      description: "",
      component: [
        <Select
          fieldSize="sm"
          id="select-sm-n-1"
          label="Label"
          note="Note message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="sm"
          id="select-sm-n-2"
          label="Label"
          error="Error message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="sm" id="select-sm-n-3" label="Label" isError={true}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with note / error, extra-small",
      description: "",
      component: [
        <Select
          fieldSize="xs"
          id="select-xs-n-1"
          label="Label"
          note="Note message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          fieldSize="xs"
          id="select-xs-n-2"
          label="Label"
          error="Error message"
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select fieldSize="xs" id="select-xs-n-3" label="Label" isError={true}>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "ID of the select should be unique",
    },
    {
      prop: "fieldSize",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the select",
    },
    {
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Select options or optgroup with options",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the select",
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
      description: "Pill shaped select",
    },
    {
      prop: "isError",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Select error without a message",
    },
    {
      prop: "note",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Note message of the select",
    },
    {
      prop: "error",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Error message of the select",
    },
    {
      prop: "customSelect",
      type: ["React.ReactNode"],
      default: null,
      optional: true,
      description:
        "Use a specific select rather than a generic HTML select (useful for Formik or otherwise controlled selects)",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes",
    label: "select attributes",
  },
};
