import React, { cloneElement, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button } from "../Button";
import { Label } from "../Label";
import { Icon } from "../../icons";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

/** Including all valid [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). */
export interface InputProps {
  /** ID of the input should be unique */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the input */
  fieldSize: "sm" | "md" | "lg";
  /** Label of the input */
  label?: string | React.ReactNode;
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Input error without a message */
  isError?: boolean;
  /** Password input preset with show/hide button */
  isPassword?: boolean;
  /** Left side element of the input. */
  leftElement?: string | React.ReactNode;
  /** Right side element of the input. */
  rightElement?: string | React.ReactNode;
  /** Note message of the input */
  note?: string | React.ReactNode;
  /** Error message of the input */
  error?: string | React.ReactNode;
  /** Use a specific input rather than a generic HTML input (useful for Formik or otherwise controlled inputs) */
  customInput?: React.ReactElement;
  /** Copy button options */
  copyButton?: InputCopyButton;
}

/** */
export type InputCopyButton = {
  /** Copy button placement */
  position: "left" | "right";
  /** Show "Copy" label */
  showLabel?: boolean;
};

interface Props
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

/**
 * The `Input` component is a form input element that inherits all native HTML `input` element attributes.
 */
export const Input: React.FC<Props> = ({
  customInput,
  id,
  label,
  fieldSize,
  isLabelUppercase,
  isError,
  isPassword,
  rightElement,
  leftElement,
  note,
  error,
  copyButton,
  ...props
}: Props) => {
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);

  const additionalClasses = [
    `Input--${fieldSize}`,
    ...(props.disabled ? ["Input--disabled"] : []),
    ...(isError || error ? ["Input--error"] : []),
  ].join(" ");

  const baseInputProps = {
    id,
    "aria-invalid": !!(isError || error),
  };

  const renderCopyButton = () => (
    <CopyToClipboard text={props.value ? props.value.toString() : ""}>
      <Button
        variant="tertiary"
        size={fieldSize}
        icon={<Icon.Copy01 />}
        iconPosition="left"
        disabled={!props.value}
        type="button"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {copyButton?.showLabel ? "Copy" : ""}
      </Button>
    </CopyToClipboard>
  );

  return (
    <div className={`Input ${additionalClasses}`}>
      {label && (
        <Label htmlFor={id} isUppercase={isLabelUppercase} size={fieldSize}>
          {label}
        </Label>
      )}

      <div className="Input__container">
        {copyButton?.position === "left" ? (
          <div className="Input__copyButton Input__copyButton--left">
            {renderCopyButton()}
          </div>
        ) : null}

        {leftElement && (
          <div className="Input__side-element Input__side-element--left">
            {leftElement}
          </div>
        )}

        {customInput ? (
          cloneElement(customInput, { ...baseInputProps, ...props })
        ) : (
          <input
            {...baseInputProps}
            {...props}
            {...(isPassword
              ? { type: isPasswordMasked ? "password" : "text" }
              : {})}
          />
        )}

        {isPassword && (
          <div className="Input__side-element Input__side-element--left">
            <button
              className="PasswordMaskToggle"
              type="button"
              onClick={(event) => {
                event?.preventDefault();
                setIsPasswordMasked(!isPasswordMasked);
              }}
            >
              {isPasswordMasked ? <Icon.EyeOff /> : <Icon.Eye />}
            </button>
          </div>
        )}

        {rightElement && (
          <div className="Input__side-element Input__side-element--right">
            {rightElement}
          </div>
        )}

        {copyButton?.position === "right" ? (
          <div className="Input__copyButton Input__copyButton--right">
            {renderCopyButton()}
          </div>
        ) : null}
      </div>

      {note && <FieldNote size={fieldSize}>{note}</FieldNote>}
      {error && (
        <FieldNote size={fieldSize} variant="error">
          {error}
        </FieldNote>
      )}
    </div>
  );
};

Input.displayName = "Input";
