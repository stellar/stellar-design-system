import { Avatar, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const avatars: ComponentDetails = {
  id: ComponentDetailsId.avatars,
  title: "Avatars",
  description: `Image displayed in a circle from a URL or SVG source. The component accepts multiple sources to show currency pair, for example.`,
  shortDescription: "Image displayed in a circle",
  examples: [
    {
      title: "Avatar from URL, full size",
      description: "",
      component: [
        <Avatar
          source={[
            {
              image: "https://stellar.expert/img/vendor/stellar.svg",
              altText: "Stellar logo",
              isFullSizeImage: true,
            },
          ]}
        />,
      ],
    },
    {
      title: "Avatar from SVG",
      description: "",
      component: [
        <Avatar
          source={[
            {
              image: <Icon.User />,
              altText: "Stellar logo",
            },
          ]}
        />,
      ],
    },
    {
      title: "Avatar pair",
      description: "",
      component: [
        <Avatar
          source={[
            {
              image: "https://stellar.expert/img/vendor/stellar.svg",
              altText: "Stellar logo",
              isFullSizeImage: true,
            },
            {
              image: <Icon.User />,
              altText: "Stellar logo",
            },
          ]}
        />,
      ],
    },
  ],
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
