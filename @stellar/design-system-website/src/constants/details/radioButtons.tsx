import { RadioButton } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const radioButtons: ComponentDetails = {
  id: ComponentDetailsId.radioButtons,
  title: "Radio buttons",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <RadioButton id="radio-1-1" name="radio-1" label="Label 1" />,
    <RadioButton id="radio-1-2" name="radio-1" label="Disabled" disabled />,
    <RadioButton id="radio-1-3" name="radio-1" label="Label 3" />,
  ],
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
