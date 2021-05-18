import { useState } from "react";
import {
  Heading2,
  Heading3,
  Input,
  Select,
  Icon,
  IconButton,
  Checkbox,
  RadioButton,
  Toggle,
  Layout,
} from "@stellar/design-system";

export const FormElements = () => {
  const [toggleActive, setToggleActive] = useState(false);

  return (
    <Layout.Inset>
      <Heading2>Form elements</Heading2>

      <Heading3>Input</Heading3>
      <div className="item-container">
        <div className="item-wrapper">
          <Input id="input-1" label="Label" placeholder="Placeholder" />
        </div>
        <div className="item-wrapper">
          <Input
            id="input-2"
            label="Label"
            placeholder="Placeholder"
            disabled
          />
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
            rightElement={
              <IconButton icon={<Icon.Info />} altText="Info text" />
            }
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
            rightElement={
              <IconButton icon={<Icon.Info />} altText="Info text" />
            }
          >
            <option>Option 1</option>
            <option>Option 2</option>
          </Select>
        </div>
      </div>

      <Heading3>Inline input and select</Heading3>
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

      <Heading3>Checkbox</Heading3>
      <div className="item-container">
        <div className="item-wrapper">
          <Checkbox id="checkbox-1" label="Label" />
        </div>

        <div className="item-wrapper">
          <Checkbox id="checkbox-2" label="Disabled" disabled />
        </div>

        <div className="item-wrapper">
          <Checkbox id="checkbox-3" label="Checked" defaultChecked />
        </div>

        <div className="item-wrapper">
          <Checkbox
            id="checkbox-4"
            label="Checked disabled"
            defaultChecked
            disabled
          />
        </div>

        <div className="item-wrapper">
          <Checkbox
            id="checkbox-5"
            label="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia reprehenderit ipsam facilis! Illum odio veritatis corporis nihil asperiores eum nam in error repudiandae necessitatibus maiores maxime, amet, blanditiis, et sapiente."
          />
        </div>
      </div>

      <Heading3>Radio button</Heading3>
      <div className="item-container">
        <div className="item-wrapper">
          <div>
            <RadioButton id="radio-1-1" name="radio-1" label="Label 1" />
            <RadioButton
              id="radio-1-2"
              name="radio-1"
              label="Label 2"
              disabled
            />
            <RadioButton id="radio-1-3" name="radio-1" label="Label 3" />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <RadioButton
              id="radio-2-1"
              name="radio-2"
              label="Label 1"
              disabled
            />
            <RadioButton
              id="radio-2-2"
              name="radio-2"
              label="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas molestias maxime nemo blanditiis corrupti."
              disabled
            />
            <RadioButton
              id="radio-2-3"
              name="radio-2"
              label="Label 3"
              defaultChecked
              disabled
            />
          </div>
        </div>
      </div>

      <Heading3>Toggle</Heading3>
      <div className="item-container">
        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-1"
              checked={toggleActive}
              onChange={() => setToggleActive(!toggleActive)}
            />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-2"
              checked={toggleActive}
              onChange={() => {}}
              disabled
            />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-3"
              checked={toggleActive}
              onChange={() => setToggleActive(!toggleActive)}
              labelOff="Default"
              labelOn="Toggled"
            />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-4"
              checked={toggleActive}
              onChange={() => setToggleActive(!toggleActive)}
              labelOff="Default"
              labelOn="Toggled"
              disabled
            />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-5"
              checked={toggleActive}
              onChange={() => setToggleActive(!toggleActive)}
              labelOff="Default"
              labelOn="Toggled"
              labelPosition={Toggle.labelPosition.right}
            />
          </div>
        </div>

        <div className="item-wrapper">
          <div>
            <Toggle
              id="toggle-6"
              checked={toggleActive}
              onChange={() => setToggleActive(!toggleActive)}
              labelOff="Default"
              labelOn="Toggled"
              labelPosition={Toggle.labelPosition.right}
              disabled
            />
          </div>
        </div>
      </div>
    </Layout.Inset>
  );
};
