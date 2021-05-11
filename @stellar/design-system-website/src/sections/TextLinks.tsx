import {
  TextLink,
  IconCheckmark,
  Heading2,
  Heading3,
} from "@stellar/design-system";

export const TextLinks = () => (
  <div className="inset">
    <Heading2>Text link</Heading2>

    <Heading3>Primary</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <p>
          Some text <TextLink href="#">link</TextLink> more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink href="https://stellar.org" iconLeft={<IconCheckmark />}>
            external link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink href="#" iconRight={<IconCheckmark />}>
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
          <TextLink href="#" variant={TextLink.variant.secondary}>
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
      <div className="item-wrapper">
        <p>
          Some text{" "}
          <TextLink
            href="#"
            variant={TextLink.variant.secondary}
            iconLeft={<IconCheckmark />}
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
            href="#"
            variant={TextLink.variant.secondary}
            iconRight={<IconCheckmark />}
          >
            link
          </TextLink>{" "}
          more text
        </p>
      </div>
    </div>
  </div>
);
