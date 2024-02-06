import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const alertPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "variant",
      options: [
        {
          value: "primary",
          label: "Primary",
        },
        {
          value: "secondary",
          label: "Secondary",
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
          value: "error",
          label: "Error",
        },
      ],
    },
    {
      type: "select",
      prop: "placement",
      options: [
        {
          value: "inline",
          label: "Inline",
        },
        {
          value: "bottom",
          label: "Bottom",
        },
      ],
    },
    {
      type: "select",
      prop: "title",
      options: [
        {
          value: "",
          label: "No title",
        },
        {
          value: "Lorem ipsum dolor sit amet",
          label: "Title",
        },
      ],
    },
    {
      type: "select",
      prop: "onClose",
      customValue: () => {
        console.log("Close action");
      },
      options: [
        {
          value: "",
          label: "No close action",
        },
        {
          value: "Close action",
          label: "Close action",
        },
      ],
    },
    {
      type: "select",
      prop: "onAction",
      customValue: () => {
        console.log("Action");
      },
      options: [
        {
          value: "",
          label: "No action",
        },
        {
          value: "Action",
          label: "Action",
        },
      ],
    },
  ],
};
