import { Textarea } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

import { TextareaField } from "./mocks";

export const textareas: ComponentDetails = {
  id: ComponentDetailsId.textareas,
  title: "Textareas",
  description: (
    <>
      <code>Textarea</code> component is a multi-line text input element, which
      inherits all native HTML <code>textarea</code> element attributes.
    </>
  ),
  shortDescription:
    "Multi-line text input element, which inherits all native HTML textarea element attributes",
  examples: [
    {
      title: "Default",
      description: "",
      component: [
        <Textarea id="textarea-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          totam ut iure
        </Textarea>,
        <Textarea id="textarea-2" disabled>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          totam ut iure
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and placeholder",
      description: "",
      component: [
        <Textarea id="textarea-3" label="Label" placeholder="Placeholder" />,
        <Textarea
          id="textarea-4"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
      ],
    },
    {
      title: "Textarea with label and long text",
      description: "",
      component: [
        <Textarea id="textarea-5" label="Label" rows={5}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea id="textarea-6" label="Label" rows={5} disabled>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and note / error",
      description: "",
      component: [
        <Textarea id="textarea-7" label="Label" note="Note message">
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea id="textarea-8" label="Label" error="Error message">
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
      ],
    },
    {
      title: "Textarea with custom input",
      description: "",
      component: [
        <Textarea
          customTextarea={<TextareaField />}
          id="textarea-12"
          label="Label"
          placeholder="Placeholder"
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
      description: "ID of the textarea should be unique",
    },
    {
      prop: "children",
      type: ["string"],
      default: "",
      optional: true,
      description: "Content of the textarea",
    },
    {
      prop: "label",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Label of the textarea",
    },
    {
      prop: "note",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Note message of the textarea",
    },
    {
      prop: "error",
      type: ["string", "ReactNode"],
      default: null,
      optional: true,
      description: "Error message of the textarea",
    },
    {
      prop: "customTextarea",
      type: ["React.ReactNode"],
      default: null,
      optional: true,
      description:
        "Use a specific textarea rather than a generic HTML textarea (useful for Formik or otherwise controlled inputs)",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes",
    label: "textarea attributes",
  },
};
