import { Select, IconButton, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const selects: ComponentDetails = {
  id: ComponentDetailsId.selects,
  title: "Selects",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <Select id="select-1" label="Label">
      <option>Option 1</option>
      <option>Option 2</option>
    </Select>,
  ],
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "",
    },
    {
      prop: "children",
      type: ["ReactNode"],
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
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes",
    label: "select attributes",
  },
};
