import {
  Button,
  ButtonVariant,
  IconSend,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  TextButton,
  TextButtonVariant,
  TextLink,
  TextLinkVariant,
  Input,
  Select,
  ProjectLogo,
  Loader,
  Checkbox,
  InfoBlock,
  InfoBlockVariant,
} from "@stellar/design-system";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="Header">
        <div className="Inset">
          <ProjectLogo title="Design System" />
        </div>
      </div>

      <div className="Content">
        <div className="Inset">
          <div className="Block">
            <Heading1>Heading 1</Heading1>
            <Heading2>Heading 2</Heading2>
            <Heading3>Heading 3</Heading3>
            <Heading4>Heading 4</Heading4>
            <Heading5>Heading 5</Heading5>
          </div>

          <div className="Block">
            <Button onClick={() => console.log("button clicked")}>
              Button label
            </Button>

            <Button
              onClick={() => console.log("button clicked")}
              icon={<IconSend />}
            >
              Label with Icon
            </Button>

            <Button onClick={() => console.log("button clicked")} disabled>
              Button disabled
            </Button>

            <Button
              onClick={() => console.log("button clicked")}
              variant={ButtonVariant.secondary}
            >
              Button secondary
            </Button>

            <Button
              onClick={() => console.log("button clicked")}
              variant={ButtonVariant.secondary}
              disabled
            >
              Button secondary disabled
            </Button>
          </div>

          <div className="Block">
            <TextButton onClick={() => console.log("button clicked")}>
              Text button label
            </TextButton>

            <TextButton
              onClick={() => console.log("button clicked")}
              variant={TextButtonVariant.secondary}
            >
              Text button secondary
            </TextButton>
          </div>

          <div className="Block">
            <TextLink onClick={() => console.log("button clicked")}>
              Text link label
            </TextLink>
          </div>

          <div className="Block">
            <TextLink
              onClick={() => console.log("button clicked")}
              variant={TextLinkVariant.secondary}
            >
              Text link secondary
            </TextLink>
          </div>

          <div className="Block">
            <Input
              id="input1"
              label="Input label"
              placeholder="Placeholder text"
            />
            <Input
              id="input2"
              label="Disabled input"
              placeholder="Placeholder text"
              disabled
            />
            <Input
              id="input3"
              label="Number input"
              type="number"
              placeholder="123"
            />
            <Input
              id="input4"
              label="With note"
              placeholder="Placeholder text"
              note="Some note"
            />
            <Input
              id="input5"
              label="With error"
              placeholder="Placeholder text"
              error="An error message"
            />
          </div>

          <div className="Block">
            <Select id="select1" label="Select one">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>

            <Select id="select2" label="Select disabled" disabled>
              <option value="Text">Text</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </Select>

            <Select id="select3" label="Select optgroups">
              <optgroup label="Theropods">
                <option>Tyrannosaurus</option>
                <option>Velociraptor</option>
                <option>Deinonychus</option>
              </optgroup>
              <optgroup label="Sauropods">
                <option>Diplodocus</option>
                <option>Saltasaurus</option>
                <option>Apatosaurus</option>
              </optgroup>
            </Select>
          </div>

          <div className="Block">
            <Checkbox id="chb" label="Checkbox" />
          </div>

          <div className="Block">
            <ProjectLogo title="Project Title" />
          </div>

          <div className="Block">
            <Loader />
          </div>

          <div className="Block">
            <InfoBlock>Info block</InfoBlock>
          </div>

          <div className="Block">
            <InfoBlock variant={InfoBlockVariant.error}>Error block</InfoBlock>
          </div>

          <div className="Block">
            <InfoBlock variant={InfoBlockVariant.warning}>
              Warning block
            </InfoBlock>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
