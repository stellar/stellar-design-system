import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import CheckIconSvg from "@site/static/img/check-icon.svg";

export const inputPreview: ComponentPreview = {
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
      prop: "placeholder",
      customValue: "Placeholder",
      options: [
        {
          value: "",
          label: "No placeholder",
        },
        {
          value: "placeholder",
          label: "Placeholder",
        },
      ],
    },
    {
      type: "select",
      prop: "fieldSize",
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
      prop: "isLabelUppercase",
      label: "Uppercase label",
    },
    {
      type: "checkbox",
      prop: "isPill",
      label: "Pill",
    },
    {
      type: "checkbox",
      prop: "isError",
      label: "Error",
    },
    {
      type: "checkbox",
      prop: "isExtraPadding",
      label: "Extra padding",
    },
    {
      type: "checkbox",
      prop: "isPassword",
      label: "Password",
    },
    {
      type: "select",
      prop: "rightElement",
      customValue: <CheckIconSvg />,
      options: [
        {
          value: "",
          label: "No element",
        },
        {
          value: "element",
          label: "Element",
        },
      ],
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
  ],
};
