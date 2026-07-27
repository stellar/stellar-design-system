import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import CheckIconSvg from "@site/static/img/check-icon.svg";

export const notificationPreview: ComponentPreview = {
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
          value: "success",
          label: "Success",
        },
        {
          value: "error",
          label: "Error",
        },
        {
          value: "warning",
          label: "Warning",
        },
      ],
    },
    {
      type: "select",
      prop: "icon",
      customValue: <CheckIconSvg />,
      options: [
        {
          value: "",
          label: "Default icon",
        },
        {
          value: "customIcon",
          label: "Custom icon",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "isFilled",
      label: "Filled",
    },
    {
      type: "select",
      prop: "children",
      customValue:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur asperiores autem excepturi doloremque esse, dicta sunt soluta! Quia quis eos beatae et optio facere voluptatum. Labore illum molestiae corporis id?",
      options: [
        {
          value: "",
          label: "No message",
        },
        {
          value: "Message",
          label: "Message",
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
