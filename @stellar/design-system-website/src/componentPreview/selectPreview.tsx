import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const selectPreview: ComponentPreview = {
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
      prop: "labelSuffix",
      customValue: "optional",
      options: [
        {
          value: "",
          label: "No suffix",
        },
        {
          value: "optional",
          label: "Optional",
        },
      ],
    },
    {
      type: "select",
      prop: "fieldSize",
      options: [
        {
          value: "sm",
          label: "SM",
        },
        {
          value: "md",
          label: "MD",
        },
        {
          value: "lg",
          label: "LG",
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
    {
      type: "select",
      prop: "success",
      customValue: "Success message",
      options: [
        {
          value: "",
          label: "No success",
        },
        {
          value: "success",
          label: "Success",
        },
      ],
    },
    {
      type: "select",
      prop: "infoText",
      options: [
        {
          value: "",
          label: "No info text",
        },
        {
          value: "Info text message",
          label: "Info text",
        },
      ],
    },
    {
      type: "select",
      prop: "infoLink",
      options: [
        {
          value: "",
          label: "No info link",
        },
        {
          value: "https://stellar.org",
          label: "Info link",
        },
      ],
    },
  ],
};
