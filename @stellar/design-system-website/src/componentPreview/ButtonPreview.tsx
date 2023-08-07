import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import CheckIconSvg from "@site/static/img/check-icon.svg";

export const ButtonPreview: ComponentPreview = {
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
          value: "destructive",
          label: "Destructive",
        },
        {
          value: "error",
          label: "Error",
        },
        {
          value: "success",
          label: "Success",
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
      ],
    },
    {
      type: "checkbox",
      prop: "isExtraPadding",
      label: "Extra padding",
    },
    {
      type: "checkbox",
      prop: "isFullWidth",
      label: "Full width",
    },
    {
      type: "checkbox",
      prop: "isLoading",
      label: "Loading",
    },
    {
      type: "checkbox",
      prop: "isPill",
      label: "Pill",
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
