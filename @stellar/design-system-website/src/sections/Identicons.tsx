import { Heading2, Identicon, TextLink, Layout } from "@stellar/design-system";

export const Identicons = () => (
  <Layout.Inset>
    <Heading2>Identicons</Heading2>

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
