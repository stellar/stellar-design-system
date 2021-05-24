import { Identicon, TextLink } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const identicons: ComponentDetails = {
  id: ComponentDetailsId.identicons,
  title: "Identicons",
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  displayExamples: [
    <Identicon
      publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
      shortenAddress
    />,
    <TextLink>
      <Identicon
        publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
        federatedAddress="test*stellar.org"
      />
    </TextLink>,
  ],
  examples: [
    {
      title: "Default",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      title: "Inside link",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "",
    },
    {
      prop: "size",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "shortenAddress",
      type: ["boolean"],
      default: "false",
      optional: true,
      description: "",
    },
    {
      prop: "federatedAddress",
      type: ["string"],
      default: null,
      optional: true,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
