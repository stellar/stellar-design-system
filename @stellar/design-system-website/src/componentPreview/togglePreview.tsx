import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const togglePreview: ComponentPreview = {
  options: [
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "select",
      prop: "checked",
      customValue: true,
      options: [
        {
          value: "",
          label: "Off",
        },
        {
          value: "on",
          label: "On",
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
  ],
};
