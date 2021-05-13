import { TextLink, Icon, Heading2, Heading3 } from "@stellar/design-system";

export const TextLinks = () => (
  <div className="inset">
    <Heading2>Text link</Heading2>

    <Heading3>Primary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <p>
          Some text <TextLink onClick={() => {}}>link</TextLink> more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink onClick={() => console.log("click")} disabled>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink href="https://stellar.org" iconLeft={<Icon.Checkmark />}>
            external link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text <TextLink iconRight={<Icon.Checkmark />}>link</TextLink>{" "}
          more text
        </p>
      </div>
    </div>

    <Heading3>Primary (underline)</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <p>
          Some text <TextLink underline>link</TextLink> more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink underline disabled>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            href="https://stellar.org"
            iconLeft={<Icon.Checkmark />}
            underline
          >
            external link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink iconRight={<Icon.Checkmark />} underline>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
    </div>

    <Heading3>Secondary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary}>link</TextLink> more
          text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} disabled>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Checkmark />}
          >
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Checkmark />}
          >
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
    </div>

    <Heading3>Secondary (underline)</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} underline>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} underline disabled>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Checkmark />}
            underline
          >
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Checkmark />}
            underline
          >
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
    </div>
  </div>
);
