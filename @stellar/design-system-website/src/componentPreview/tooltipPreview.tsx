import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const tooltipPreview: ComponentPreview = {
  options: [
    {
      type: "select",
      prop: "placement",
      options: [
        {
          value: "",
          label: "Placement",
        },
        {
          value: "bottom",
          label: "Bottom",
        },
        {
          value: "bottom-start",
          label: "Bottom start",
        },
        {
          value: "bottom-end",
          label: "Bottom end",
        },
        {
          value: "left",
          label: "Left",
        },
        {
          value: "left-start",
          label: "Left start",
        },
        {
          value: "left-end",
          label: "Left end",
        },
        {
          value: "right",
          label: "Right",
        },
        {
          value: "right-start",
          label: "Right start",
        },
        {
          value: "right-end",
          label: "Right end",
        },
        {
          value: "top",
          label: "Top",
        },
        {
          value: "top-start",
          label: "Top start",
        },
        {
          value: "top-end",
          label: "Top end",
        },
      ],
    },
    {
      type: "select",
      prop: "isVisible",
      customValue: false,
      options: [
        {
          value: "",
          label: "Visible",
        },
        {
          value: "hidden",
          label: "Hidden",
        },
      ],
    },
    {
      type: "select",
      prop: "isContrast",
      customValue: false,
      options: [
        {
          value: "",
          label: "Contrast",
        },
        {
          value: "noContrast",
          label: "No contrast",
        },
      ],
    },
  ],
};
