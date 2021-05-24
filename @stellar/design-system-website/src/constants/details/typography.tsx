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
  description: (
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
      consequuntur sequi magni beatae. Facere repellat voluptates perferendis,
      reprehenderit qui, maiores corporis expedita consectetur error, incidunt
      cumque cum quidem illo architecto!
    </p>
  ),
  displayExamples: [
    <Heading1>Heading 1</Heading1>,
    <Heading2>Heading 2</Heading2>,
    <Heading3>Heading 3</Heading3>,
    <Heading4>Heading 4</Heading4>,
    <Heading5>Heading 5</Heading5>,
    <Heading6>Heading 6</Heading6>,
    <Eyebrow>Eyebrow</Eyebrow>,
  ],
  examples: [
    {
      title: "Heading",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
      component: [
        <p>
          Primary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
          autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
          laborum!
        </p>,

        // TODO: ??? how to handle this better?
        <p className="Paragraph--secondary">
          Secondary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
          autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
          laborum!
        </p>,
      ],
    },
    {
      title: "Text",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
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
      type: ["string", "React.ReactNode"],
      default: null,
      optional: false,
      description: "",
    },
  ],
  externalProps: {
    link: "",
    label: "",
  },
};
