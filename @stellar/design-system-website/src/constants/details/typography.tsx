import {
  Caption,
  Code,
  Heading,
  Link,
  Paragraph,
  Title,
} from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types";

export const typography: ComponentDetails = {
  id: ComponentDetailsId.typography,
  title: "Typography",
  description: `Typography (including headings, paragraph, and other text types) examples
  and documentation. These components don’t have any special props, and
  inherit their native HTML attributes.`,
  shortDescription: "Headings, paragraph, and other text types",
  examples: [
    {
      title: "Heading",
      description: (
        <>
          HTML headings <code>h1</code> through <code>h6</code>.
        </>
      ),
      component: [
        <Heading as="h1" size="xxl">
          H1 Heading / XXL
        </Heading>,
        <Heading as="h2" size="xl">
          H2 Heading / XL
        </Heading>,
        <Heading as="h3" size="lg">
          H3 Heading / LG
        </Heading>,
        <Heading as="h4" size="md">
          H4 Heading / MD
        </Heading>,
        <Heading as="h5" size="sm">
          H5 Heading / SM
        </Heading>,
        <Heading as="h6" size="xs">
          H6 Heading / XS
        </Heading>,
      ],
    },
    {
      title: "Caption",
      description: (
        // TODO: update text
        <>Caption.</>
      ),
      component: [
        <Caption size="lg">Caption / LG</Caption>,
        <Caption size="md">Caption / MD</Caption>,
        <Caption size="sm">Caption / SM</Caption>,
        <Caption size="xs">Caption / XS</Caption>,
      ],
    },
    {
      title: "Paragraph",
      description: (
        <>
          Text paragraph is an HTML <code>p</code> tag, not a custom component.
        </>
      ),
      component: [
        <Paragraph size="lg">
          LG: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          ipsum distinctio in a modi quod dolor iusto, repellendus non, autem
          culpa ad, animi soluta incidunt voluptate vel magnam ullam laborum!
        </Paragraph>,
        <Paragraph size="md">
          MD: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          ipsum distinctio in a modi quod dolor iusto, repellendus non, autem
          culpa ad, animi soluta incidunt voluptate vel magnam ullam laborum!
        </Paragraph>,
        <Paragraph size="sm">
          SM: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          ipsum distinctio in a modi quod dolor iusto, repellendus non, autem
          culpa ad, animi soluta incidunt voluptate vel magnam ullam laborum!
        </Paragraph>,
        <Paragraph size="xs">
          XS: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          ipsum distinctio in a modi quod dolor iusto, repellendus non, autem
          culpa ad, animi soluta incidunt voluptate vel magnam ullam laborum!
        </Paragraph>,
      ],
    },
    {
      title: "Title",
      description: (
        // TODO: description
        <>Title</>
      ),
      component: [
        <Title size="lg">Title / LG</Title>,
        <Title size="md">Title / MD</Title>,
        <Title size="sm">Title / SM</Title>,
        <Title size="xs">Title / XS</Title>,
      ],
    },
    {
      title: "Link",
      description: (
        // TODO: description
        <>Link</>
      ),
      component: [
        <Link size="lg">Link / LG</Link>,
        <Link size="md">Link / MD</Link>,
        <Link size="sm">Link / SM</Link>,
        <Link size="xs">Link / XS</Link>,
      ],
    },
    {
      title: "Code",
      description: (
        // TODO: description
        <>Code</>
      ),
      component: [
        <Code size="md">Code / MD</Code>,
        <Code size="sm">Code / SM</Code>,
        <Code size="xs">Code / XS</Code>,
      ],
    },
  ],
  props: [
    // Heading
    {
      heading: "Heading",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "as",
      type: ["h1", "h2", "h3", "h4", "h5", "h6"],
      default: null,
      optional: false,
      description: "Heading level H1-H6",
    },
    {
      prop: "size",
      type: ["xxl", "xl", "lg", "md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Heading size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Heading text",
    },
    // Caption
    {
      heading: "Caption",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "size",
      type: ["lg", "md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Caption size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Caption text",
    },
    // Paragraph
    {
      heading: "Paragraph",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "size",
      type: ["lg", "md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Paragraph size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Paragraph text",
    },
    {
      prop: "asDiv",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Render paragraph as div",
    },
    // Title
    {
      heading: "Title",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "size",
      type: ["lg", "md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Title size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Title text",
    },
    // Link
    {
      heading: "Link",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "size",
      type: ["lg", "md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Link size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Link text",
    },
    {
      prop: "asDiv",
      type: ["boolean"],
      default: null,
      optional: true,
      description: "Render link as div",
    },
    // Code
    {
      heading: "Code",
      prop: "",
      type: [""],
      default: "",
      optional: false,
      description: "",
    },
    {
      prop: "size",
      type: ["md", "sm", "xs"],
      default: null,
      optional: false,
      description: "Code size",
    },
    {
      prop: "children",
      type: ["string", "ReactNode"],
      default: null,
      optional: false,
      description: "Code text",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
