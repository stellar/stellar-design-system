import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const buttonPresetPreview: ComponentPreview = {
  options: [
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "select",
      prop: "preset",
      options: [
        {
          value: "copy",
          label: "Copy",
        },
        {
          value: "download",
          label: "Download",
        },
      ],
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
          label: "Default label",
        },
        {
          value: "Label",
          label: "Custom label",
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
          value: "var(--sds-clr-green-09)",
          label: "Green",
        },
        {
          value: "var(--sds-clr-amber-09)",
          label: "Yellow",
        },
      ],
    },
  ],
};
