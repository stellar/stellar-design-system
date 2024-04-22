import CopyToClipboard from "react-copy-to-clipboard";
import { Button } from "../Button";
import { Icon } from "../../icons";

export type InputCopyButtonProps = {
  /** Text to copy */
  textToCopy: string;
  /** Size of the button */
  fieldSize: "sm" | "md" | "lg";
  /** Show "Copy" label */
  showLabel?: boolean;
};

export const InputCopyButton = ({
  textToCopy,
  fieldSize,
  showLabel,
}: InputCopyButtonProps) => (
  <CopyToClipboard text={textToCopy}>
    <Button
      variant="tertiary"
      size={fieldSize}
      icon={<Icon.Copy01 />}
      iconPosition="left"
      disabled={!textToCopy}
      type="button"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      {showLabel ? "Copy" : ""}
    </Button>
  </CopyToClipboard>
);
