import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Eyebrow,
} from "@stellar/design-system";
import { ComponentDetails, ComponentDetailsId } from "types/types.d";

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
          HTML headings <code>h1</code> through <code>h6</code>, and "eyebrow"
          element.
        </>
      ),
      component: [
        <Heading1>Heading 1</Heading1>,
        <Heading2>Heading 2</Heading2>,
        <Heading3>Heading 3</Heading3>,
        <Heading4>Heading 4</Heading4>,
        <Heading5>Heading 5</Heading5>,
        <Heading6>Heading 6</Heading6>,
        <Eyebrow>Eyebrow</Eyebrow>,
      ],
    },
    {
      title: "Paragraph",
      description: (
        <>
          Text paragraph is an HTML <code>p</code> tag, not a custom component.
          It has primary (default) and secondary variants. Secondary variant is
          applied by adding a class <code>Paragraph--secondary</code>.
        </>
      ),
      component: [
        <p>
          Primary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
          autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
          laborum!
        </p>,

        <p className="Paragraph--secondary">
          Secondary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
          autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
          laborum!
        </p>,
      ],
    },
    {
      title: "Text elements",
      description:
        "Text elements to make some text stand out. All of them are native HTML elements.",
      component: [
        <p>
          <strong>Bolded (strong)</strong> text and <b>bolded (b)</b> text
        </p>,

        <p>
          <em>Emphasis (em)</em> text and <i>idiomatic (i)</i> text
        </p>,

        <p>
          <code>Code example (code)</code> on this line
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
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
