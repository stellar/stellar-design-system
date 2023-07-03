import { Toggle } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

import { Field } from "./mocks";

export const toggles: ComponentDetails = {
  id: ComponentDetailsId.toggles,
  title: "Toggles",
  description: (
    <>
      <code>Toggle</code> component is similar to <code>Checkbox</code>{" "}
      component, which allows to toggle/switch between on and off states.
    </>
  ),
  shortDescription: "Similar to Checkbox component, which allows to toggle",
  examples: [
    {
      title: "Default",
      description: "",
      component: [
        <Toggle
          id="toggle-1"
          checked={false}
          onChange={() => {
            // do nothing
          }}
        />,
        <Toggle
          id="toggle-2"
          checked={false}
          onChange={() => {
            // do nothing
          }}
          disabled
        />,
      ],
    },
    {
      title: "Toggle on",
      description: "",
      component: [
        <Toggle
          id="toggle-3"
          checked={true}
          onChange={() => {
            // do nothing
          }}
        />,
        <Toggle
          id="toggle-4"
          checked={true}
          onChange={() => {
            // do nothing
          }}
          disabled
        />,
      ],
    },
    {
      title: "Toggle with custom input",
      description: "",
      component: [
        <Toggle customInput={<Field />} checked={true} id="toggle-5" />,
      ],
    },
  ],
  props: [
    {
      prop: "id",
      type: ["string"],
      default: null,
      optional: false,
      description: "ID of the toggle should be unique",
    },
    {
      prop: "checked",
      type: ["boolean"],
      default: null,
      optional: false,
      description: `If "true" the toggle state is "on"`,
    },
    {
      prop: "onChange",
      type: ["() => void"],
      default: null,
      optional: false,
      description: "Function to handle the toggle state change",
    },
    {
      prop: "disabled",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Disable the toggle",
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
    link: "",
    label: "",
  },
};
