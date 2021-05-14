import {
  Heading2,
  Heading3,
  Input,
  Select,
  Icon,
  IconButton,
} from "@stellar/design-system";

export const FormElements = () => (
  <div className="inset">
    <Heading2>Form elements</Heading2>

    <Heading3>Input</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Input id="input-1" label="Label" placeholder="Placeholder" />
      </div>
      <div className="item-wrapper">
        <Input id="input-2" label="Label" placeholder="Placeholder" disabled />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-3"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-4"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          disabled
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-5"
          label="Label"
          placeholder="Placeholder"
          note="Note message"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-6"
          label="Label"
          placeholder="Placeholder"
          defaultValue="Value"
          error="Error message"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-7"
          label="Label"
          placeholder="Placeholder"
          rightElement="text"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-8"
          label="Label"
          placeholder="Placeholder"
          leftElement="text"
        />
      </div>
      <div className="item-wrapper">
        <Input
          id="input-9"
          label="Label"
          placeholder="Placeholder"
          rightElement={<IconButton icon={<Icon.Info />} altText="Info text" />}
        />
      </div>
    </div>

    <Heading3>Select</Heading3>
    <div className="item-container">
      <div className="item-wrapper">
        <Select id="select-1">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-2" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-3" label="Label">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-4" label="Label" disabled>
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-5" label="Label" note="Note message">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-6" label="Label" error="Error message">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-7" label="Label" rightElement="text">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select id="select-8" label="Label" leftElement="text">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>

      <div className="item-wrapper">
        <Select
          id="select-9"
          label="Label"
          rightElement={<IconButton icon={<Icon.Info />} altText="Info text" />}
        >
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>
    </div>

    <Heading3>Inline</Heading3>
    <div className="item-container">
      <div className="item-wrapper inline">
        <Input
          id="inline-1"
          label="Input"
          placeholder="Placeholder"
          defaultValue="Value"
        />

        <Select id="inline-2" label="Select">
          <option>Option 1</option>
          <option>Option 2</option>
        </Select>
      </div>
    </div>
  </div>
);
