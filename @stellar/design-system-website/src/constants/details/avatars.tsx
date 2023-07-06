import { Avatar, Link } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const avatars: ComponentDetails = {
  id: ComponentDetailsId.avatars,
  title: "Avatars",
  description: (
    <>
      Unique identicon of public Stellar address. We’re using{" "}
      <Link href="https://github.com/Lobstrco/stellar-identicon-js">
        stellar-identicon-js
      </Link>
      .
    </>
  ),
  shortDescription: "Identicon as an avatar",
  examples: [
    {
      title: "",
      description: "",
      component: [
        <Avatar publicAddress="GAVL6PM6TDJ7FBRCRL6GJ5WO2TWSH6ZRNU2HOARQ4RYMDUGSW7XWS57G" />,
        <Avatar publicAddress="GD4XW236EFCESNO4RKGG5PWML2WNQIJS335XECBW4GRARXKE64VIMOLZ" />,
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
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
