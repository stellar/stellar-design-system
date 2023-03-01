import React, { cloneElement } from "react";
import { Label } from "../Label";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
  children?: string;
  label?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
  isLabelUppercase?: boolean;
  customTextarea?: React.ReactElement;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  fieldSize,
  children = "",
  label,
  note,
  error,
  isLabelUppercase,
  customTextarea,
  spellCheck = false,
  autoComplete = "off",
  ...props
}: TextareaProps) => {
  const additionalClasses = [
    `Textarea--${fieldSize}`,
    ...(props.disabled ? ["Textarea--disabled"] : []),
    ...(error ? ["Textarea--error"] : []),
  ].join(" ");

  const baseTextareaProps = {
    id,
    "aria-invalid": !!error,
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
