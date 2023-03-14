import { Checkbox } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const checkboxes: ComponentDetails = {
  id: ComponentDetailsId.checkboxes,
  title: "Checkboxes",
  description: (
    <>
      <code>Checkbox</code> component is a form input element, which allows you
      to select single values for submission. All native HTML{" "}
      <code>checkbox</code> input attributes apply.
    </>
  ),
  shortDescription:
    "Form input element, which allows you to select single values for submission",
  examples: [
    {
      title: "Default, medium",
      description: "",
      component: [
        <Checkbox fieldSize="md" id="checkbox-md-1" label="Label" />,
        <Checkbox
          fieldSize="md"
          id="checkbox-md-2"
          label="Disabled"
          disabled
        />,
      ],
    },
    {
      title: "Default, small",
      description: "",
      component: [
        <Checkbox fieldSize="sm" id="checkbox-sm-1" label="Label" />,
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-2"
          label="Disabled"
          disabled
        />,
      ],
    },
    {
      title: "Default, extra-small",
      description: "",
      component: [
        <Checkbox fieldSize="xs" id="checkbox-xs-1" label="Label" />,
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-2"
          label="Disabled"
          disabled
        />,
      ],
    },
    {
      title: "Checked, medium",
      description: "",
      component: [
        <Checkbox
          fieldSize="md"
          id="checkbox-md-3"
          label="Checked"
          defaultChecked
        />,
        <Checkbox
          fieldSize="md"
          id="checkbox-md-4"
          label="Checked disabled"
          defaultChecked
          disabled
        />,
      ],
    },
    {
      title: "Checked, small",
      description: "",
      component: [
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-3"
          label="Checked"
          defaultChecked
        />,
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-4"
          label="Checked disabled"
          defaultChecked
          disabled
        />,
      ],
    },
    {
      title: "Checked, extra-small",
      description: "",
      component: [
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-3"
          label="Checked"
          defaultChecked
        />,
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-4"
          label="Checked disabled"
          defaultChecked
          disabled
        />,
      ],
    },
    {
      title: "Checkbox with long label, medium",
      description: "",
      component: [
        <Checkbox
          fieldSize="md"
          id="checkbox-md-5"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
        />,
        <Checkbox
          fieldSize="md"
          id="checkbox-md-6"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
          disabled
        />,
      ],
    },
    {
      title: "Checkbox with long label, small",
      description: "",
      component: [
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-5"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
        />,
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-6"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
          disabled
        />,
      ],
    },
    {
      title: "Checkbox with long label, extra-small",
      description: "",
      component: [
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-5"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
        />,
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-6"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
          disabled
        />,
      ],
    },
    {
      title: "Checkbox with note / error, medium",
      description: "",
      component: [
        <Checkbox
          fieldSize="md"
          id="checkbox-md-7"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis"
          note="Note message"
        />,
        <Checkbox
          fieldSize="md"
          id="checkbox-md-8"
          label="Illum odio veritatis corporis nihil asperiores eum nam in error"
          error="Error message"
        />,
      ],
    },
    {
      title: "Checkbox with note / error, small",
      description: "",
      component: [
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-7"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis"
          note="Note message"
        />,
        <Checkbox
          fieldSize="sm"
          id="checkbox-sm-8"
          label="Illum odio veritatis corporis nihil asperiores eum nam in error"
          error="Error message"
        />,
      ],
    },
    {
      title: "Checkbox with note / error, extra-small",
      description: "",
      component: [
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-7"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis"
          note="Note message"
        />,
        <Checkbox
          fieldSize="xs"
          id="checkbox-xs-8"
          label="Illum odio veritatis corporis nihil asperiores eum nam in error"
          error="Error message"
        />,
      ],
    },
    {
      title: "Without label",
      description: "",
      component: [<Checkbox fieldSize="md" id="checkbox-nl-md-1" />],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "ID of the checkbox should be unique",
    },
    {
      prop: "fieldSize",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the checkbox",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the checkbox",
    },
    {
      prop: "note",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Note message of the checkbox",
    },
    {
      prop: "error",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Error message of the checkbox",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
