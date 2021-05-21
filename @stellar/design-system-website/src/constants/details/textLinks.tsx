/* eslint-disable react/jsx-no-comment-textnodes */
import { TextLink, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

export const textLinks: ComponentDetails = {
  id: ComponentDetailsId.textLinks,
  title: "Text links",
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  examples: [
    {
      title: "Primary (default)",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text <TextLink iconLeft={<Icon.Checkmark />}>link</TextLink> more
          text
        </p>,
        <p>
          Some text{" "}
          <TextLink iconLeft={<Icon.Checkmark />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) with icon on the right",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text <TextLink iconRight={<Icon.Checkmark />}>link</TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink iconRight={<Icon.Checkmark />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink underline iconLeft={<Icon.Checkmark />}>
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink underline iconLeft={<Icon.Checkmark />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline with icon on the right",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink underline iconRight={<Icon.Checkmark />}>
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink underline iconRight={<Icon.Checkmark />} disabled>
            link
          </TextLink>{" "}
          more text
        </p>,
      ],
    },

    {
      title: "Secondary",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Checkmark />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconLeft={<Icon.Checkmark />}
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Checkmark />}
          >
            link
          </TextLink>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            iconRight={<Icon.Checkmark />}
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconLeft={<Icon.Checkmark />}
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
            iconLeft={<Icon.Checkmark />}
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Some text{" "}
          <TextLink
            variant={TextLink.variant.secondary}
            underline
            iconRight={<Icon.Checkmark />}
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
            iconRight={<Icon.Checkmark />}
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
      description: "",
    },
    {
      prop: "iconLeft",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "iconRight",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "variant",
      type: ["primary", "secondary"],
      default: "primary",
      optional: true,
      description: "",
    },
    {
      prop: "disabled",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "",
    },
    {
      prop: "underline",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "",
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
