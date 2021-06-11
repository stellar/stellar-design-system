import { Identicon, TextLink } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const identicons: ComponentDetails = {
  id: ComponentDetailsId.identicons,
  title: "Identicons",
  description: (
    <>
      Unique identicons of public Stellar keys. We’re using awesome{" "}
      <TextLink href="https://github.com/Lobstrco/stellar-identicon-js">
        stellar-identicon-js
      </TextLink>
      .
    </>
  ),
  shortDescription: "Unique identicons of public Stellar keys",
  examples: [
    {
      title: "Default",
      description: "",
      component: [
        <Identicon publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV" />,
        <Identicon
          publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
          shortenAddress
        />,
        <Identicon
          publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
          size="4rem"
        />,
      ],
    },
    {
      title: "Inside a link",
      description: "",
      component: [
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
          />
        </TextLink>,
        <TextLink disabled>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
          />
        </TextLink>,
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            federatedAddress="test*stellar.org"
          />
        </TextLink>,
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
            federatedAddress="test*stellar.org"
          />
        </TextLink>,
      ],
    },
  ],
  props: [
    {
      prop: "publicAddress",
      type: ["string"],
      default: null,
      optional: false,
      description: "Stellar public key or address",
    },
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "Set custom size of the component",
    },
    {
      prop: "shortenAddress",
      type: ["boolean"],
      default: "false",
      optional: true,
      description: "Use shortened Stellar public key or address",
    },
    {
      prop: "federatedAddress",
      type: ["string"],
      default: null,
      optional: true,
      description: "Provide federated address",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
