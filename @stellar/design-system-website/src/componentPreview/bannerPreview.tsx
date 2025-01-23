import React from "react";
import { ComponentPreview } from "@site/src/components/PreviewBlock";
import CheckIconSvg from "@site/static/img/check-icon.svg";

export const bannerPreview: ComponentPreview = {
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
      type: "select",
      prop: "children",
      options: [
        {
          value: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          label: "Short message",
        },
        {
          value:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolorum eligendi, corrupti quam commodi, iure aliquam, architecto impedit amet nihil reiciendis. Pariatur nostrum ex nemo aut quod autem delectus voluptate!",
          label: "Long message",
        },
      ],
    },
  ],
};
