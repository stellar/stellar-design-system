import { Select, IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

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
        <Select id="select-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select id="select-2" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with label",
      description: "",
      component: [
        <Select id="select-3" label="Label">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select id="select-4" label="Label" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Select with note / error",
      description: "",
      component: [
        <Select id="select-5" label="Label" note="Note message">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select id="select-6" label="Label" error="Error message">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
      ],
    },
    {
      title: "Input with elements",
      description: "",
      component: [
        <Select id="select-7" label="Label" rightElement="text">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select id="select-8" label="Label" leftElement="text">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>,
        <Select
          id="select-9"
          label="Label"
          rightElement={<IconButton icon={<Icon.Info />} altText="Info text" />}
        >
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
      prop: "children",
      type: ["ReactNode"],
      default: null,
      optional: false,
      description: "Select options or optgroup with options",
    },
    {
      prop: "label",
      type: ["string"],
      default: null,
      optional: true,
      description: "Label of the select",
    },
    {
      prop: "leftElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Element on the left of the select",
    },
    {
      prop: "rightElement",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Element on the right of the select",
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
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes",
    label: "select attributes",
  },
};
