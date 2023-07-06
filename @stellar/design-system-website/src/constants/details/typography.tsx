import { Caption, Heading, Paragraph, Title } from "@stellar/design-system";
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
        <>
          Use <code>Caption</code> component to use for eyebrow subtitles paired
          with a title, and secondary accent text in elements like badges and
          network status.
        </>
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
        <>
          Use <code>Title</code> component when a semantic heading is not
          needed. For example, banner title, navigation item, label, etc.
        </>
      ),
      component: [
        <Title size="lg">Title / LG</Title>,
        <Title size="md">Title / MD</Title>,
        <Title size="sm">Title / SM</Title>,
        <Title size="xs">Title / XS</Title>,
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
      prop: "addlClassName",
      type: ["string"],
      default: null,
      optional: true,
      description: "Additional classes",
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
      prop: "addlClassName",
      type: ["string"],
      default: null,
      optional: true,
      description: "Additional classes",
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
      prop: "addlClassName",
      type: ["string"],
      default: null,
      optional: true,
      description: "Additional classes",
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
      prop: "addlClassName",
      type: ["string"],
      default: null,
      optional: true,
      description: "Additional classes",
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
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
