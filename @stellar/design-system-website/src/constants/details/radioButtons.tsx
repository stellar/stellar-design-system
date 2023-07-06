import { RadioButton } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const radioButtons: ComponentDetails = {
  id: ComponentDetailsId.radioButtons,
  title: "Radio buttons",
  description: (
    <>
      <code>RadioButton</code> component is a form input element, which allows
      you to select a single value from a group of options for submission. All
      native HTML <code>radio</code> input attributes apply.
    </>
  ),
  shortDescription:
    "Form input element, select a single value from a group of options",
  examples: [
    {
      title: "Default, medium",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="md"
            id="radio-md-1-1"
            name="radio-md-1"
            label="Label 1"
            checked
          />
          <RadioButton
            fieldSize="md"
            id="radio-md-1-2"
            name="radio-md-1"
            label="Label 2"
            disabled
          />
          <RadioButton
            fieldSize="md"
            id="radio-md-1-3"
            name="radio-md-1"
            label="Label 3"
          />
        </div>,
      ],
    },
    {
      title: "Default, small",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="sm"
            id="radio-sm-1-1"
            name="radio-sm-1"
            label="Label 1"
            checked
          />
          <RadioButton
            fieldSize="sm"
            id="radio-sm-1-2"
            name="radio-sm-1"
            label="Label 2"
            disabled
          />
          <RadioButton
            fieldSize="sm"
            id="radio-sm-1-3"
            name="radio-sm-1"
            label="Label 3"
          />
        </div>,
      ],
    },
    {
      title: "Default, extra-small",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="xs"
            id="radio-xs-1-1"
            name="radio-xs-1"
            label="Label 1"
            checked
          />
          <RadioButton
            fieldSize="xs"
            id="radio-xs-1-2"
            name="radio-xs-1"
            label="Label 2"
            disabled
          />
          <RadioButton
            fieldSize="xs"
            id="radio-xs-1-3"
            name="radio-xs-1"
            label="Label 3"
          />
        </div>,
      ],
    },
    {
      title: "Checked and disabled, medium",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="md"
            id="radio-md-2-1"
            name="radio-md-2"
            label="Label 1"
            disabled
          />
          <RadioButton
            fieldSize="md"
            id="radio-md-2-2"
            name="radio-md-2"
            label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maxime nemo blanditiis corrupti."
            disabled
          />
          <RadioButton
            fieldSize="md"
            id="radio-md-2-3"
            name="radio-md-2"
            label="Label 3"
            defaultChecked
            disabled
          />
        </div>,
      ],
    },
    {
      title: "Checked and disabled, small",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="sm"
            id="radio-sm-2-1"
            name="radio-sm-2"
            label="Label 1"
            disabled
          />
          <RadioButton
            fieldSize="sm"
            id="radio-sm-2-2"
            name="radio-sm-2"
            label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maxime nemo blanditiis corrupti."
            disabled
          />
          <RadioButton
            fieldSize="sm"
            id="radio-sm-2-3"
            name="radio-sm-2"
            label="Label 3"
            defaultChecked
            disabled
          />
        </div>,
      ],
    },
    {
      title: "Checked and disabled, extra-small",
      description: "",
      component: [
        <div>
          <RadioButton
            fieldSize="xs"
            id="radio-xs-2-1"
            name="radio-xs-2"
            label="Label 1"
            disabled
          />
          <RadioButton
            fieldSize="xs"
            id="radio-xs-2-2"
            name="radio-xs-2"
            label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maxime nemo blanditiis corrupti."
            disabled
          />
          <RadioButton
            fieldSize="xs"
            id="radio-xs-2-3"
            name="radio-xs-2"
            label="Label 3"
            defaultChecked
            disabled
          />
        </div>,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "ID of the radio button should be unique",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Label of the radio button",
    },
    {
      prop: "fieldSize",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the radio button",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
