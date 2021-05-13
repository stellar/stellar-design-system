import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Eyebrow,
} from "@stellar/design-system";

export const Typography = () => (
  <div className="inset">
    <Heading2>Typography</Heading2>

    <div>
      <Heading1>Heading 1</Heading1>
      <Heading2>Heading 2</Heading2>
      <Heading3>Heading 3</Heading3>
      <Heading4>Heading 4</Heading4>
      <Heading5>Heading 5</Heading5>
      <Heading6>Heading 6</Heading6>
      <Eyebrow>Eyebrow</Eyebrow>
    </div>

    <div>
      <Heading3>Paragraph</Heading3>
      <p>
        Primary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
        autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
        laborum!
      </p>

      {/* TODO: ??? how to handle? */}
      <p className="Paragraph--secondary">
        Secondary: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Repellat ipsum distinctio in a modi quod dolor iusto, repellendus non,
        autem culpa ad, animi soluta incidunt voluptate vel magnam ullam
        laborum!
      </p>
    </div>

    <div>
      <Heading3>Text</Heading3>
      <p>
        <strong>Bolded (strong)</strong> text and <b>bolded (b)</b> text
      </p>

      <p>
        <em>Emphasis (em)</em> text and <i>idiomatic (i)</i> text
      </p>

      <p>
        <code>Code example (code)</code> on this line
      </p>
    </div>
  </div>
);
