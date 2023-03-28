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
  isError?: boolean;
  isLabelUppercase?: boolean;
  isExtraPadding?: boolean;
  customTextarea?: React.ReactElement;
}

export const Textarea: React.FC<TextareaProps> = ({
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
}: TextareaProps) => {
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
