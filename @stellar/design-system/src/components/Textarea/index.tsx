import React, { cloneElement } from "react";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  children?: string;
  label?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
  customTextarea?: React.ReactElement;
}

export const Textarea: React.FC<TextareaProps> = ({
  id,
  children = "",
  label,
  note,
  error,
  customTextarea,
  spellCheck = false,
  autoComplete = "off",
  ...props
}: TextareaProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Textarea--disabled"] : []),
    ...(error ? ["Textarea--error"] : []),
  ].join(" ");

  const baseTextareaProps = {
    id,
    "aria-invalid": !!error,
  };

  return (
    <div className={`Textarea ${additionalClasses}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="Textarea__wrapper">
        {customTextarea ? (
          cloneElement(customTextarea, { ...baseTextareaProps, ...props })
        ) : (
          <textarea {...baseTextareaProps} {...props}>
            {children}
          </textarea>
        )}
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && (
        <FieldNote variant={FieldNote.variant.error}>{error}</FieldNote>
      )}
    </div>
  );
};

Textarea.displayName = "Textarea";
