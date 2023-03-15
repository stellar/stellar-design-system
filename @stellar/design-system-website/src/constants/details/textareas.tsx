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
        <Textarea fieldSize="md" id="textarea-md-a-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          totam ut iure
        </Textarea>,
        <Textarea fieldSize="md" id="textarea-md-a-2" disabled>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
          totam ut iure
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and placeholder, medium",
      description: "",
      component: [
        <Textarea
          fieldSize="md"
          id="textarea-md-b-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Textarea
          fieldSize="md"
          id="textarea-md-b-2"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Textarea
          fieldSize="md"
          id="textarea-md-b-3"
          label="Label"
          placeholder="Placeholder"
          isLabelUppercase
        />,
      ],
    },
    {
      title: "Textarea with label and placeholder, small",
      description: "",
      component: [
        <Textarea
          fieldSize="sm"
          id="textarea-sm-b-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-b-2"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-b-3"
          label="Label"
          placeholder="Placeholder"
          isLabelUppercase
        />,
      ],
    },
    {
      title: "Textarea with label and placeholder, extra-small",
      description: "",
      component: [
        <Textarea
          fieldSize="xs"
          id="textarea-xs-b-1"
          label="Label"
          placeholder="Placeholder"
        />,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-b-2"
          label="Label"
          placeholder="Placeholder"
          disabled
        />,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-b-3"
          label="Label"
          placeholder="Placeholder"
          isLabelUppercase
        />,
      ],
    },
    {
      title: "Textarea with label and long text, medium",
      description: "",
      component: [
        <Textarea fieldSize="md" id="textarea-md-c-1" label="Label" rows={5}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="md"
          id="textarea-md-c-2"
          label="Label"
          rows={5}
          disabled
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="md"
          id="textarea-md-c-3"
          label="Label"
          rows={5}
          isLabelUppercase
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and long text, small",
      description: "",
      component: [
        <Textarea fieldSize="sm" id="textarea-sm-c-1" label="Label" rows={5}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-c-2"
          label="Label"
          rows={5}
          disabled
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-c-3"
          label="Label"
          rows={5}
          isLabelUppercase
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and long text, extra-small",
      description: "",
      component: [
        <Textarea fieldSize="xs" id="textarea-xs-c-1" label="Label" rows={5}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-c-2"
          label="Label"
          rows={5}
          disabled
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-c-3"
          label="Label"
          rows={5}
          isLabelUppercase
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
          neque veniam repudiandae fugit labore. Voluptatibus deserunt animi
          porro esse, dolor dolore quas fuga numquam. Quisquam aperiam earum
          suscipit nihil eaque!
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and note / error, medium",
      description: "",
      component: [
        <Textarea
          fieldSize="md"
          id="textarea-md-d-1"
          label="Label"
          note="Note message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="md"
          id="textarea-md-d-2"
          label="Label"
          error="Error message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="md"
          id="textarea-md-d-3"
          label="Label"
          isError={true}
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and note / error, small",
      description: "",
      component: [
        <Textarea
          fieldSize="sm"
          id="textarea-sm-d-1"
          label="Label"
          note="Note message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-d-2"
          label="Label"
          error="Error message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="sm"
          id="textarea-sm-d-3"
          label="Label"
          isError={true}
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
      ],
    },
    {
      title: "Textarea with label and note / error, extra-small",
      description: "",
      component: [
        <Textarea
          fieldSize="xs"
          id="textarea-xs-d-1"
          label="Label"
          note="Note message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-d-2"
          label="Label"
          error="Error message"
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
        <Textarea
          fieldSize="xs"
          id="textarea-xs-d-3"
          label="Label"
          isError={true}
        >
          Voluptatibus deserunt animi porro esse, dolor dolore quas fuga numquam
        </Textarea>,
      ],
    },
    {
      title: "Textarea with custom input",
      description: "",
      component: [
        <Textarea
          fieldSize="md"
          customTextarea={<TextareaField />}
          id="textarea-md-e-1"
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
      prop: "fieldSize",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the textarea",
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
      prop: "isError",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Textarea error without a message",
    },
    {
      prop: "isLabelUppercase",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Make label uppercase",
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
