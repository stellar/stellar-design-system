import React, { cloneElement } from "react";
import { Label } from "../Label";
import { FieldNote } from "../utils/FieldNote";
import { InputCopyButton } from "../utils/InputCopyButton";
import "./styles.scss";

/** Including all valid [textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes) */
export interface TextareaProps {
  /** ID of the textarea (should be unique) */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the textarea */
  fieldSize: "sm" | "md" | "lg";
  /** Content of the textarea */
  children?: string;
  /** Label of the textarea */
  label?: string | React.ReactNode;
  /** Adds suffix to the label */
  labelSuffix?: string | React.ReactNode;
  /** Note message of the textarea */
  note?: string | React.ReactNode;
  /** Error message of the textarea */
  error?: string | React.ReactNode;
  /** Success message of the input */
  success?: string | React.ReactNode;
  /** Info text tooltip */
  infoText?: string | React.ReactNode;
  /** External link to open in new window */
  infoLink?: string;
  /** Textarea error without a message */
  isError?: boolean;
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Show copy text button */
  hasCopyButton?: boolean;
  /** Use a specific textarea rather than a generic HTML textarea (useful for Formik or otherwise controlled inputs) */
  customTextarea?: React.ReactElement;
}

interface Props
  extends TextareaProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  children?: string;
}

/**
 * The `textarea` component is a multi-line text input element that inherits all native HTML `textarea` element attributes.
 */
export const Textarea: React.FC<Props> = ({
  id,
  fieldSize,
  children = "",
  label,
  labelSuffix,
  note,
  error,
  success,
  infoText,
  infoLink,
  isError,
  isLabelUppercase,
  hasCopyButton,
  customTextarea,
  spellCheck = false,
  autoComplete = "off",
  ...props
}: Props) => {
  const additionalClasses = [
    `Textarea--${fieldSize}`,
    ...(props.disabled ? ["Textarea--disabled"] : []),
    ...(isError || error ? ["Textarea--error"] : []),
  ].join(" ");

  const baseTextareaProps = {
    id,
    "aria-invalid": !!(isError || error),
    spellCheck,
    autoComplete,
  };

  return (
    <div className={`Textarea ${additionalClasses}`}>
      {label && (
        <Label
          htmlFor={id}
          isUppercase={isLabelUppercase}
          size={fieldSize}
          labelSuffix={labelSuffix}
          infoText={infoText}
          infoLink={infoLink}
        >
          {label}
        </Label>
      )}

      {customTextarea ? (
        cloneElement(customTextarea, { ...baseTextareaProps, ...props })
      ) : (
        <textarea {...baseTextareaProps} {...props}>
          {children}
        </textarea>
      )}

      <div className="Textarea__footer">
        <div className="Textarea__footer__notes">
          {note && <FieldNote size={fieldSize}>{note}</FieldNote>}
          {error && (
            <FieldNote size={fieldSize} variant="error">
              {error}
            </FieldNote>
          )}
          {success && (
            <FieldNote size={fieldSize} variant="success">
              {success}
            </FieldNote>
          )}
        </div>
        {hasCopyButton ? (
          <InputCopyButton fieldSize={fieldSize} textToCopy={children} />
        ) : null}
      </div>
    </div>
  );
};

Textarea.displayName = "Textarea";
