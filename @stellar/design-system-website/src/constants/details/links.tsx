/* eslint-disable react/jsx-no-comment-textnodes */
import { Link, Icon } from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const links: ComponentDetails = {
  id: ComponentDetailsId.links,
  title: "Links",
  description: (
    <>
      <code>Link</code> component is a styled HTML anchor (<code>a</code>)
      element. Use <code>Link</code> to open links or to navigate to other
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
          Some text <Link>link</Link> more text
        </p>,
        <p>
          Some text <Link isDisabled>link</Link> more text
        </p>,
      ],
    },
    {
      title: "Primary (default) with icon on the left",
      description: "",
      component: [
        <p>
          Some text{" "}
          <Link icon={<Icon.ArrowLeft />} iconPosition="left">
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link icon={<Icon.ArrowLeft />} iconPosition="left" isDisabled>
            link
          </Link>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) with icon on the right",
      description: "",
      component: [
        <p>
          Some text{" "}
          <Link icon={<Icon.ArrowRight />} iconPosition="right">
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link icon={<Icon.ArrowRight />} iconPosition="right" isDisabled>
            link
          </Link>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary (default) underline",
      description: "",
      component: [
        <p>
          Some text <Link isUnderline>link</Link> more text
        </p>,
        <p>
          Some text{" "}
          <Link isUnderline isDisabled>
            link
          </Link>{" "}
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
          <Link isUnderline icon={<Icon.ArrowLeft />} iconPosition="left">
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            isUnderline
            icon={<Icon.ArrowLeft />}
            iconPosition="left"
            isDisabled
          >
            link
          </Link>{" "}
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
          <Link isUnderline icon={<Icon.ArrowRight />} iconPosition="right">
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            isUnderline
            icon={<Icon.ArrowRight />}
            iconPosition="right"
            isDisabled
          >
            link
          </Link>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Primary, medium",
      description: "",
      component: [
        <Link size="md">Medium</Link>,
        <Link size="md" isDisabled>
          Medium
        </Link>,
        <Link size="md" isUnderline>
          Medium
        </Link>,
        <Link size="md" isUnderline isDisabled>
          Medium
        </Link>,
        <Link size="md" isUppercase>
          Medium
        </Link>,
        <Link size="md" isUppercase isUnderline>
          Medium
        </Link>,
        <Link size="md" isUppercase isUnderline isDisabled>
          Medium
        </Link>,
        <Link size="md" icon={<Icon.ArrowRight />} iconPosition="right">
          Medium
        </Link>,
        <Link
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Medium
        </Link>,
        <Link
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Medium
        </Link>,
        <Link
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Medium
        </Link>,
        <Link
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Medium
        </Link>,
        <Link
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Medium
        </Link>,
      ],
    },
    {
      title: "Primary, small",
      description: "",
      component: [
        <Link size="sm">Small</Link>,
        <Link size="sm" isDisabled>
          Small
        </Link>,
        <Link size="sm" isUnderline>
          Small
        </Link>,
        <Link size="sm" isUnderline isDisabled>
          Small
        </Link>,
        <Link size="sm" isUppercase>
          Small
        </Link>,
        <Link size="sm" isUppercase isUnderline>
          Small
        </Link>,
        <Link size="sm" isUppercase isUnderline isDisabled>
          Small
        </Link>,
        <Link size="sm" icon={<Icon.ArrowRight />} iconPosition="right">
          Small
        </Link>,
        <Link
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Small
        </Link>,
        <Link
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Small
        </Link>,
        <Link
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Small
        </Link>,
        <Link
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Small
        </Link>,
        <Link
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Small
        </Link>,
      ],
    },
    {
      title: "Primary, extra-small",
      description: "",
      component: [
        <Link size="xs">Extra small</Link>,
        <Link size="xs" isDisabled>
          Extra small
        </Link>,
        <Link size="xs" isUnderline>
          Extra small
        </Link>,
        <Link size="xs" isUnderline isDisabled>
          Extra small
        </Link>,
        <Link size="xs" isUppercase>
          Extra small
        </Link>,
        <Link size="xs" isUppercase isUnderline>
          Extra small
        </Link>,
        <Link size="xs" isUppercase isUnderline isDisabled>
          Extra small
        </Link>,
        <Link size="xs" icon={<Icon.ArrowRight />} iconPosition="right">
          Extra small
        </Link>,
        <Link
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Extra small
        </Link>,
        <Link
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Extra small
        </Link>,
        <Link
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Extra small
        </Link>,
        <Link
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Extra small
        </Link>,
        <Link
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Extra small
        </Link>,
      ],
    },
    {
      title: "Secondary",
      description: "",
      component: [
        <p>
          Some text <Link variant="secondary">link</Link> more text
        </p>,
        <p>
          Some text{" "}
          <Link variant="secondary" isDisabled>
            link
          </Link>{" "}
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
          <Link
            variant="secondary"
            icon={<Icon.ArrowLeft />}
            iconPosition="left"
          >
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            variant="secondary"
            icon={<Icon.ArrowLeft />}
            iconPosition="left"
            isDisabled
          >
            link
          </Link>{" "}
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
          <Link
            variant="secondary"
            icon={<Icon.ArrowRight />}
            iconPosition="right"
          >
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            variant="secondary"
            icon={<Icon.ArrowRight />}
            iconPosition="right"
            isDisabled
          >
            link
          </Link>{" "}
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
          <Link variant="secondary" isUnderline>
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link variant="secondary" isUnderline isDisabled>
            link
          </Link>{" "}
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
          <Link
            variant="secondary"
            isUnderline
            icon={<Icon.ArrowLeft />}
            iconPosition="left"
          >
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            variant="secondary"
            isUnderline
            icon={<Icon.ArrowLeft />}
            iconPosition="left"
            isDisabled
          >
            link
          </Link>{" "}
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
          <Link
            variant="secondary"
            isUnderline
            icon={<Icon.ArrowRight />}
            iconPosition="right"
          >
            link
          </Link>{" "}
          more text
        </p>,
        <p>
          Some text{" "}
          <Link
            variant="secondary"
            isUnderline
            icon={<Icon.ArrowRight />}
            iconPosition="right"
            isDisabled
          >
            link
          </Link>{" "}
          more text
        </p>,
      ],
    },
    {
      title: "Secondary, medium",
      description: "",
      component: [
        <Link variant="secondary" size="md">
          Medium
        </Link>,
        <Link variant="secondary" size="md" isDisabled>
          Medium
        </Link>,
        <Link variant="secondary" size="md" isUnderline>
          Medium
        </Link>,
        <Link variant="secondary" size="md" isUnderline isDisabled>
          Medium
        </Link>,
        <Link variant="secondary" size="md" isUppercase>
          Medium
        </Link>,
        <Link variant="secondary" size="md" isUppercase isUnderline>
          Medium
        </Link>,
        <Link variant="secondary" size="md" isUppercase isUnderline isDisabled>
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
        >
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Medium
        </Link>,
        <Link
          variant="secondary"
          size="md"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Medium
        </Link>,
      ],
    },
    {
      title: "Secondary, small",
      description: "",
      component: [
        <Link variant="secondary" size="sm">
          Small
        </Link>,
        <Link variant="secondary" size="sm" isDisabled>
          Small
        </Link>,
        <Link variant="secondary" size="sm" isUnderline>
          Small
        </Link>,
        <Link variant="secondary" size="sm" isUnderline isDisabled>
          Small
        </Link>,
        <Link variant="secondary" size="sm" isUppercase>
          Small
        </Link>,
        <Link variant="secondary" size="sm" isUppercase isUnderline>
          Small
        </Link>,
        <Link variant="secondary" size="sm" isUppercase isUnderline isDisabled>
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
        >
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Small
        </Link>,
        <Link
          variant="secondary"
          size="sm"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Small
        </Link>,
      ],
    },
    {
      title: "Secondary, extra-small",
      description: "",
      component: [
        <Link variant="secondary" size="xs">
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isDisabled>
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isUnderline>
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isUnderline isDisabled>
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isUppercase>
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isUppercase isUnderline>
          Extra-small
        </Link>,
        <Link variant="secondary" size="xs" isUppercase isUnderline isDisabled>
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
        >
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
        >
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isDisabled
        >
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUppercase
        >
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
        >
          Extra-small
        </Link>,
        <Link
          variant="secondary"
          size="xs"
          icon={<Icon.ArrowRight />}
          iconPosition="right"
          isUnderline
          isUppercase
          isDisabled
        >
          Extra-small
        </Link>,
      ],
    },
  ],
  props: [
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Content of the link",
    },
    {
      prop: "variant",
      type: ["primary", "secondary"],
      default: "primary",
      optional: true,
      description: "Variant of the link",
    },
    {
      prop: "size",
      type: ["md", "sm", "xs"],
      default: null,
      optional: true,
      description: "Size of the link, will inherit parent size if not set",
    },
    {
      prop: "icon",
      type: ["ReactNode"],
      default: null,
      optional: true,
      description: "Icon element",
    },
    {
      prop: "iconPosition",
      type: ["left", "right"],
      default: "right",
      optional: true,
      description: "Position of the icon",
    },
    {
      prop: "isDisabled",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Disable the component",
    },
    {
      prop: "isUnderline",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Underline the text",
    },
    {
      prop: "isUppercase",
      type: ["Boolean"],
      default: null,
      optional: true,
      description: "Make text uppercase",
    },
  ],
  externalProps: {
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes",
    label: "anchor element attributes",
  },
  notes: [
    <p>
      <code>Link</code> with external <code>href</code> (starting with{" "}
      <code>http(s)</code> or <code>//</code>) will have attributes{" "}
      <code>rel="noreferrer noopener"</code> and <code>target="_blank"</code>{" "}
      automatically added.
    </p>,
  ],
};
