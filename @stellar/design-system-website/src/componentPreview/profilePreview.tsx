import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const profilePreview: ComponentPreview = {
  options: [
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
      type: "select",
      prop: "federatedAddress",
      customValue: "test*stellar.org",
      options: [
        {
          value: "",
          label: "No federated",
        },
        {
          value: "Federated",
          label: "Federated",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "isShort",
      label: "Short",
    },
    {
      type: "select",
      prop: "href",
      customValue: "https://stellar.org",
      options: [
        {
          value: "",
          label: "No link",
        },
        {
          value: "link",
          label: "Link",
        },
      ],
    },
    {
      type: "checkbox",
      prop: "hideAvatar",
      label: "Hide avatar",
    },
    {
      type: "checkbox",
      prop: "isCopy",
      label: "Copy",
    },
    {
      type: "select",
      prop: "onClick",
      customValue: () => alert("Click!"),
      options: [
        {
          value: "",
          label: "No click",
        },
        {
          value: "Click",
          label: "Click",
        },
      ],
    },
  ],
};
