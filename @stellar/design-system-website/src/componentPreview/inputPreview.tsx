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
      prop: "labelSuffix",
      customValue: "optional",
      options: [
        {
          value: "",
          label: "No suffix",
        },
        {
          value: "optional",
          label: "Optional",
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
      prop: "disabled",
      label: "Disabled",
    },
    {
      type: "checkbox",
      prop: "isLabelUppercase",
      label: "Uppercase label",
    },
    {
      type: "checkbox",
      prop: "isError",
      label: "Error",
    },
    {
      type: "checkbox",
      prop: "isPassword",
      label: "Password",
    },
    {
      type: "select",
      prop: "leftElement",
      options: [
        {
          value: "",
          label: "No left element",
        },
        {
          value: "$",
          label: "Left element",
        },
      ],
    },
    {
      type: "select",
      prop: "rightElement",
      customValue: <CheckIconSvg />,
      options: [
        {
          value: "",
          label: "No right element",
        },
        {
          value: "element",
          label: "Right element",
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
    {
      type: "select",
      prop: "success",
      customValue: "Success message",
      options: [
        {
          value: "",
          label: "No success",
        },
        {
          value: "success",
          label: "Success",
        },
      ],
    },
    {
      type: "select",
      prop: "copyButton",
      customValue: { position: "right", showLabel: true },
      options: [
        {
          value: "",
          label: "No copy button",
        },
        {
          value: "copyButton",
          label: "Copy button",
        },
      ],
    },
    {
      type: "select",
      prop: "infoText",
      options: [
        {
          value: "",
          label: "No info text",
        },
        {
          value: "Info text message",
          label: "Info text",
        },
      ],
    },
  ],
};
