import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import { Icon } from "@stellar/design-system";

export const badgePreview: ComponentPreview = {
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
          value: "tertiary",
          label: "Tertiary",
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
      prop: "size",
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
      prop: "isOutlined",
      label: "Outlined",
    },
    {
      type: "checkbox",
      prop: "isSquare",
      label: "Square",
    },
    {
      type: "checkbox",
      prop: "isStatus",
      label: "Status",
    },
    {
      type: "select",
      prop: "icon",
      customValue: <Icon.ArrowNarrowRight />,
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
