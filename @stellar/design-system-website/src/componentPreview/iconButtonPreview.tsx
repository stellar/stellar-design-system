import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const iconButtonPreview: ComponentPreview = {
  options: [
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "select",
      prop: "variant",
      options: [
        {
          value: "default",
          label: "Default",
        },
        {
          value: "error",
          label: "Error",
        },
        {
          value: "success",
          label: "Success",
        },
        {
          value: "warning",
          label: "Warning",
        },
        {
          value: "highlight",
          label: "Highlight",
        },
      ],
    },
    {
      type: "select",
      prop: "label",
      options: [
        {
          value: "",
          label: "No label",
        },
        {
          value: "Label",
          label: "Label",
        },
      ],
    },
    {
      type: "select",
      prop: "customSize",
      options: [
        {
          value: "",
          label: "Default size",
        },
        {
          value: "2rem",
          label: "2 rem",
        },
        {
          value: "3rem",
          label: "3 rem",
        },
      ],
    },
    {
      type: "select",
      prop: "customColor",
      options: [
        {
          value: "",
          label: "Default color",
        },
        {
          value: "var(--color-purple-50)",
          label: "Purple",
        },
        {
          value: "var(--color-yellow-50)",
          label: "Yellow",
        },
      ],
    },
  ],
};
