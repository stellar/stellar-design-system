import React, { cloneElement } from "react";
import { Label } from "../Label";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

/** Including all valid [textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes) */
export interface TextareaProps {
  /** ID of the textarea should be unique */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the textarea */
  fieldSize: "md" | "sm" | "xs";
  /** Content of the textarea */
  children?: string;
  /** Label of the textarea */
  label?: string | React.ReactNode;
  /** Note message of the textarea */
  note?: string | React.ReactNode;
  /** Error message of the textarea */
  error?: string | React.ReactNode;
  /** Textarea error without a message */
  isError?: boolean;
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Textarea with extra padding */
  isExtraPadding?: boolean;
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
 * `Textarea` component is a multi-line text input element, which inherits all native HTML `textarea` element attributes.
 */
export const Textarea: React.FC<Props> = ({
  id,
  fieldSize,
  children = "",
  label,
  note,
  error,
  isError,
  isLabelUppercase,
  isExtraPadding,
  customTextarea,
  spellCheck = false,
  autoComplete = "off",
  ...props
}: Props) => {
  const additionalClasses = [
    `Textarea--${fieldSize}`,
    ...(props.disabled ? ["Textarea--disabled"] : []),
    ...(isError || error ? ["Textarea--error"] : []),
    ...(isExtraPadding ? ["Textarea--extra-padding"] : []),
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
          size={fieldSize === "xs" ? "xs" : "sm"}
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

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Textarea.displayName = "Textarea";
