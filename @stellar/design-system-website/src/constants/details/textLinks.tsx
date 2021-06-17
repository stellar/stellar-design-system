/* eslint-disable react/jsx-no-comment-textnodes */
import { TextLink, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const textLinks: ComponentDetails = {
  id: ComponentDetailsId.textLinks,
  title: "Text links",
  description: (
    <>
      <code>TextLink</code> component is a styled HTML anchor (<code>a</code>)
      element. Use <code>TextLink</code> to open links or to navigate to other
      pages. There are two variants (<code>primary</code> and{" "}
      <code>secondary</code>), and underline prop.
    </>
  ),
  shortDescription:
    "Used to trigger an action to open links or to navigate to other pages",
  examples: [
    {
      title: "Primary (default)",
      description: "",
      component: [
        <p>
          Some text <TextLink>link</TextLink> more text
        </p>,
        <p>
          Some text <TextLink disabled>link</TextLink> more text
        </p>,
      ],
    },
    {
      title: "Primary (default) with icon on the left",
      description: "",
      component: [
        <p>
          Some text <TextLink iconLeft={<Icon.Check />}>link</TextLink> more
          text
        </p>,
        <p>
          Some text{" "}
          <TextLink iconLeft={<Icon.Check />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) with icon on the right",
      description: "",
      component: [
        <p>
          Some text <TextLink iconRight={<Icon.Check />}>link</TextLink> more
          text
        </p>,
        <p>
          Some text{" "}
          <TextLink iconRight={<Icon.Check />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline",
      description: "",
      component: [
        <p>
          Some text <TextLink underline>link</TextLink> more text
        </p>,
        <p>
          Some text{" "}
          <TextLink underline disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline with icon on the left",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink underline iconLeft={<Icon.Check />}>
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink underline iconLeft={<Icon.Check />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline with icon on the right",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink underline iconRight={<Icon.Check />}>
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink underline iconRight={<Icon.Check />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },

    {
      title: "Secondary",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary}>link</TextLink> more
          text
        </p>,
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary with icon on the left",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Check />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Check />}
            disabled
          >
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary with icon on the right",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Check />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Check />}
            disabled
          >
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary underline",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} underline>
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink variant={TextLink.variant.secondary} underline disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary underline with icon on the left",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconLeft={<Icon.Check />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconLeft={<Icon.Check />}
            disabled
          >
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary underline with icon on the right",
      description: "",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconRight={<Icon.Check />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconRight={<Icon.Check />}
            disabled
          >
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Content of the component",
    },
    {
      prop: "iconLeft",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element on the left of the content",
    },
    {
      prop: "iconRight",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element on the right of the content",
    },
    {
      prop: "variant",
      type: ["primary", "secondary"],
      default: "primary",
      optional: true,
      description: "Variant of the component",
    },
    {
      prop: "disabled",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Disable the component",
    },
    {
      prop: "underline",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Underline the text",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes",
    label: "anchor element attributes",
  },
  notes: [
    <p>
      <code>TextLink</code> with external <code>href</code> (starting with{" "}
      <code>http(s)</code> or <code>//</code>) will have attributes{" "}
      <code>rel="noreferrer noopener"</code> and <code>target="_blank"</code>{" "}
      automatically added.
    </p>,
  ],
};
