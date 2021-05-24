import { Heading2, Identicon, TextLink, Layout } from "@stellar/design-system";
import { RouteLink } from "components/RouteLink";
import { getComponentDetailsLink } from "helpers/getComponentDetailsLink";
import { ComponentDetailsId } from "types/types.d";

export const Identicons = () => (
  <Layout.Inset>
    <Heading2>
      <RouteLink href={getComponentDetailsLink(ComponentDetailsId.identicons)}>
        Identicons
      </RouteLink>
    </Heading2>

    <div className="item-container">
      <div className="item-wrapper">
        <Identicon publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV" />
      </div>

      <div className="item-wrapper">
        <Identicon
          publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
          shortenAddress
        />
      </div>

      <div className="item-wrapper">
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
          />
        </TextLink>
      </div>

      <div className="item-wrapper">
        <TextLink disabled>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
          />
        </TextLink>
      </div>

      <div className="item-wrapper">
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            federatedAddress="test*stellar.org"
          />
        </TextLink>
      </div>

      <div className="item-wrapper">
        <TextLink>
          <Identicon
            publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
            shortenAddress
            federatedAddress="test*stellar.org"
          />
        </TextLink>
      </div>

      <div className="item-wrapper">
        <Identicon
          publicAddress="GC26L4VPX5J63UEL25RJFLRSDWYPCC3P2WNLF2NHZ3DY577LRGDTLQHV"
          size="4rem"
        />
      </div>
    </div>
  </Layout.Inset>
);
