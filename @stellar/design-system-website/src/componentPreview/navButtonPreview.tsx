import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const navButtonPreview: ComponentPreview = {
  options: [
    {
      type: "checkbox",
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "checkbox",
      prop: "showBorder",
      label: "Show border",
    },
  ],
};
