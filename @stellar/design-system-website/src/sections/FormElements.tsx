import { Heading2, Heading3, Input } from "@stellar/design-system";

export const FormElements = () => (
  <div className="inset">
    <Heading2>Form elements</Heading2>

    <Heading3>Input</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Input id="test1" label="Label" placeholder="Placeholder" />
      </div>
      <div className="item-wrapper">
        <Input id="test2" label="Label" placeholder="Placeholder" disabled />
      </div>
      <div className="item-wrapper">
        <Input
          id="test3"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="test4"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          disabled
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="test5"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="test6"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="test7"
          label="Label"
          placeholder="Placeholder"
          rightElement="text"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="test8"
          label="Label"
          placeholder="Placeholder"
          leftElement="text"
        />
      </div>
    </div>
  </div>
);
