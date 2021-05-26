import { Checkbox } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const checkboxes: ComponentDetails = {
  id: ComponentDetailsId.checkboxes,
  title: "Checkboxes",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <Checkbox id="checkbox-1" label="Label" />,
    <Checkbox id="checkbox-3" label="Checked" defaultChecked />,
  ],
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Checkbox id="checkbox-1" label="Label" />,
        <Checkbox id="checkbox-2" label="Disabled" disabled />,
      ],
    },
    {
      title: "Checked",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Checkbox id="checkbox-3" label="Checked" defaultChecked />,
        <Checkbox
          id="checkbox-4"
          label="Checked disabled"
          defaultChecked
          disabled
        />,
      ],
    },
    {
      title: "Checkbox with long label",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Checkbox
          id="checkbox-5"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
        />,
        <Checkbox
          id="checkbox-6"
          label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
          disabled
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
      description: "",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes",
    label: "input attributes",
  },
};
