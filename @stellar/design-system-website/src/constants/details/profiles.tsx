import { Profile } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const profiles: ComponentDetails = {
  id: ComponentDetailsId.profiles,
  title: "Profiles",
  description: "Profile showing avatar with Stellar address.",
  shortDescription: "Avatar with Stellar address",
  examples: [
    {
      title: "Basic in all sizes",
      description: "",
      component: [
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="md"
          isShort
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="sm"
          isShort
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="xs"
          isShort
        />,
      ],
    },
    {
      title: "Button in all sizes",
      description: "",
      component: [
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="md"
          isShort
          onClick={() => alert("clicked")}
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="sm"
          isShort
          onClick={() => alert("clicked")}
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="xs"
          isShort
          onClick={() => alert("clicked")}
        />,
      ],
    },
    {
      title: "Link in all sizes",
      description: "",
      component: [
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="md"
          isShort
          href="https://stellar.org"
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="sm"
          isShort
          href="https://stellar.org"
        />,
        <Profile
          publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G"
          size="xs"
          isShort
          href="https://stellar.org"
        />,
      ],
    },
    {
      title: "Variations",
      description: "",
      component: [
        <Profile
          publicAddress="GARXAGPRFFBE7I4CTNQZUL3VJCW76R57SPAO4B7MWFDBPSLVW7E2JQPL"
          size="md"
        />,
        <Profile
          publicAddress="GCFTCBPT7EMRXIAQUWTXMLL5WNNS7Y67I67GWGQZFKPO6RJL7342KKFF"
          size="md"
          federatedAddress="test*stellar.org"
        />,
        <Profile
          publicAddress="GARXAGPRFFBE7I4CTNQZUL3VJCW76R57SPAO4B7MWFDBPSLVW7E2JQPL"
          size="md"
          isShort
        />,
        <Profile
          publicAddress="GCFTCBPT7EMRXIAQUWTXMLL5WNNS7Y67I67GWGQZFKPO6RJL7342KKFF"
          size="md"
          federatedAddress="test*stellar.org"
          isShort
        />,
        <Profile
          publicAddress="GARXAGPRFFBE7I4CTNQZUL3VJCW76R57SPAO4B7MWFDBPSLVW7E2JQPL"
          size="md"
          isShort
          hideAvatar
        />,
        <Profile
          publicAddress="GCFTCBPT7EMRXIAQUWTXMLL5WNNS7Y67I67GWGQZFKPO6RJL7342KKFF"
          size="md"
          federatedAddress="test*stellar.org"
          isShort
          hideAvatar
        />,
      ],
    },
  ],
  props: [
    {
      prop: "publicAddress",
      type: ["string"],
      default: null,
      optional: false,
      description: "Public Stellar address",
    },
    {
      prop: "size",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Size of the component",
    },
    {
      prop: "federatedAddress",
      type: ["string"],
      default: null,
      optional: true,
      description: "Federated address to show in place of Stellar address",
    },
    {
      prop: "isShort",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Shorten Stellar or federated address",
    },
    {
      prop: "onClick",
      type: ["() => void"],
      default: null,
      optional: true,
      description: "Adding onClick prop will turn component into a button",
    },
    {
      prop: "href",
      type: ["string"],
      default: null,
      optional: true,
      description: "Adding href prop will turn component into a link",
    },
    {
      prop: "hideAvatar",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Hide the avatar",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
