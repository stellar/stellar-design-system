import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const textareaPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "label",
      customValue: "Label",
      options: [
        {
          value: "",
          label: "No label",
        },
        {
          value: "label",
          label: "Label",
        },
      ],
    },
    {
      type: "select",
      prop: "placeholder",
      customValue: "Placeholder",
      options: [
        {
          value: "",
          label: "No placeholder",
        },
        {
          value: "placeholder",
          label: "Placeholder",
        },
      ],
    },
    {
      type: "select",
      prop: "fieldSize",
      options: [
        {
          value: "md",
          label: "MD",
        },
        {
          value: "sm",
          label: "SM",
        },
        {
          value: "xs",
          label: "XS",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "checkbox",
      prop: "isLabelUppercase",
      label: "Uppercase label",
    },
    {
      type: "checkbox",
      prop: "isError",
      label: "Error",
    },
    {
      type: "checkbox",
      prop: "isExtraPadding",
      label: "Extra padding",
    },
    {
      type: "select",
      prop: "note",
      customValue: "Note message",
      options: [
        {
          value: "",
          label: "No note",
        },
        {
          value: "note",
          label: "Note",
        },
      ],
    },
    {
      type: "select",
      prop: "error",
      customValue: "Error message",
      options: [
        {
          value: "",
          label: "No error",
        },
        {
          value: "error",
          label: "Error",
        },
      ],
    },
  ],
};
