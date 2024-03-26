import { ComponentPreview } from "@site/src/components/PreviewBlock";

export const avatarPreview: ComponentPreview = {
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
      prop: "publicAddress",
      options: [
        {
          value: "",
          label: "No public address",
        },
        {
          value: "GD4XW236EFCESNO4RKGG5PWML2WNQIJS335XECBW4GRARXKE64VIMOLZ",
          label: "Public address",
          updateRelated: {
            prop: "userName",
            value: undefined,
          },
        },
      ],
    },
    {
      type: "select",
      prop: "userName",
      options: [
        {
          value: "",
          label: "No user name",
        },
        {
          value: "User Name",
          label: "User name",
          updateRelated: {
            prop: "publicAddress",
            value: undefined,
          },
        },
      ],
    },
  ],
};
