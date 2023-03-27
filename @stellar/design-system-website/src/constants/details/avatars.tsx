import { Avatar } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const avatars: ComponentDetails = {
  id: ComponentDetailsId.avatars,
  title: "Avatars",
  description: `Image displayed in a circle from a URL or SVG source. The component accepts multiple sources to show currency pair, for example.`,
  shortDescription: "Image displayed in a circle",
  examples: [
    {
      title: "Avatar for public Stellar address",
      description: "",
      component: [
        <Avatar publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G" />,
        <Avatar
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          showAddress
        />,
        <Avatar
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          showAddress
          isShort
        />,
      ],
    },
    {
      title: "Avatar with federated address",
      description: "",
      component: [
        <Avatar
          publicAddress="GD4XW236EFCESNO4RKGG5PWML2WNQIJS335XECBW4GRARXKE64VIMOLZ"
          federatedAddress="test*stellar.org"
        />,
        <Avatar
          publicAddress="GD4XW236EFCESNO4RKGG5PWML2WNQIJS335XECBW4GRARXKE64VIMOLZ"
          federatedAddress="test*stellar.org"
          showAddress
        />,
        <Avatar
          publicAddress="GD4XW236EFCESNO4RKGG5PWML2WNQIJS335XECBW4GRARXKE64VIMOLZ"
          federatedAddress="test*stellar.org"
          showAddress
          isShort
        />,
      ],
    },
  ],
  // TODO: update props
  props: [
    {
      prop: "source",
      type: ["AvatarSource[]"],
      default: null,
      optional: false,
      description: "Image URL or SVG source",
    },
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "Size of the avatar",
    },
    {
      prop: "borderColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Border color of the avatar",
    },
    // Adding a sub-title to indicate AvatarSource types
    {
      prop: "AvatarSource",
      type: [],
      default: null,
      optional: false,
      description: "",
    },
    {
      prop: "image",
      type: ["string", "React.ReactNode", "undefined"],
      default: null,
      optional: false,
      description: "Image source",
    },
    {
      prop: "altText",
      type: ["string"],
      default: null,
      optional: false,
      description: "Image title",
    },
    {
      prop: "backgroundColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Background color",
    },
    {
      prop: "iconColor",
      type: ["string"],
      default: null,
      optional: true,
      description: "Icon color, applies only to SVG",
    },
    {
      prop: "isFullSizeImage",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Stretch image, applies only to URL",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
