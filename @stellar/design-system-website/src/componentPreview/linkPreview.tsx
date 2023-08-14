import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import CheckIconSvg from "@site/static/img/check-icon.svg";

export const linkPreview: ComponentPreview = {
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
      ],
    },
    {
      type: "select",
      prop: "size",
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
        {
          value: "",
          label: "Inherit",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "isDisabled",
      label: "Disabled",
    },
    {
      type: "checkbox",
      prop: "isUnderline",
      label: "Underline",
    },
    {
      type: "checkbox",
      prop: "isUppercase",
      label: "Uppercase",
    },
    {
      type: "select",
      prop: "icon",
      customValue: <CheckIconSvg />,
      clearProp: "iconPosition",
      options: [
        {
          value: "",
          label: "No icon",
        },
        {
          value: '{"iconPosition": "right"}',
          label: "Icon right",
        },
        {
          value: '{"iconPosition": "left"}',
          label: "Icon left",
        },
      ],
    },
  ],
};
