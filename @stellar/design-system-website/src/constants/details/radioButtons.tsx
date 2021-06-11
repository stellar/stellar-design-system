import { RadioButton } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

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
      title: "Default",
      description: "",
      component: [
        <div>
          <RadioButton id="radio-1-1" name="radio-1" label="Label 1" />
          <RadioButton id="radio-1-2" name="radio-1" label="Label 2" disabled />
          <RadioButton id="radio-1-3" name="radio-1" label="Label 3" />
        </div>,
      ],
    },
    {
      title: "Checked and disabled",
      description: "",
      component: [
        <div>
          <RadioButton id="radio-2-1" name="radio-2" label="Label 1" disabled />
          <RadioButton
            id="radio-2-2"
            name="radio-2"
            label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maxime nemo blanditiis corrupti."
            disabled
          />
          <RadioButton
            id="radio-2-3"
            name="radio-2"
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
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
