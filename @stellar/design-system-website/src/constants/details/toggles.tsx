import { Toggle } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const toggles: ComponentDetails = {
  id: ComponentDetailsId.toggles,
  title: "Toggles",
  description: `
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!`,
  displayExamples: [
    <Toggle
      id="toggle-5"
      checked={false}
      onChange={() => {}}
      labelOff="Off"
      labelOn="On"
    />,
    <Toggle
      id="toggle-5"
      checked={true}
      onChange={() => {}}
      labelOff="Off"
      labelOn="On"
    />,
  ],
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle id="toggle-1" checked={false} onChange={() => {}} />,
        <Toggle id="toggle-2" checked={false} onChange={() => {}} disabled />,
      ],
    },
    {
      title: "Toggle on",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle id="toggle-3" checked={true} onChange={() => {}} />,
        <Toggle id="toggle-4" checked={true} onChange={() => {}} disabled />,
      ],
    },
    {
      title: "Toggle with labels",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle
          id="toggle-5"
          checked={false}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
        />,
        <Toggle
          id="toggle-6"
          checked={false}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          disabled
        />,
      ],
    },
    {
      title: "Toggle on with labels",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle
          id="toggle-7"
          checked={true}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
        />,
        <Toggle
          id="toggle-8"
          checked={true}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          disabled
        />,
      ],
    },
    {
      title: "Toggle with labels on the right",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle
          id="toggle-9"
          checked={false}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          labelPosition={Toggle.labelPosition.right}
        />,
        <Toggle
          id="toggle-10"
          checked={false}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          labelPosition={Toggle.labelPosition.right}
          disabled
        />,
      ],
    },
    {
      title: "Toggle on with labels on the right",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <Toggle
          id="toggle-11"
          checked={true}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          labelPosition={Toggle.labelPosition.right}
        />,
        <Toggle
          id="toggle-12"
          checked={true}
          onChange={() => {}}
          labelOff="Off"
          labelOn="On"
          labelPosition={Toggle.labelPosition.right}
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
      prop: "checked",
      type: ["boolean"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "onChange",
      type: ["() => void"],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "disabled",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "labelOn",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "labelOff",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "labelPosition",
      type: ["left", "right"],
      default: "left",
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
