import React, { cloneElement } from "react";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customInput?: React.ReactElement;
  id: string;
  label?: string | React.ReactNode;
  leftElement?: string | React.ReactNode;
  rightElement?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  customInput,
  id,
  label,
  leftElement,
  rightElement,
  note,
  error,
  ...props
}: InputProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Input--disabled"] : []),
    ...(error ? ["Input--error"] : []),
  ].join(" ");

  const baseInputProps = {
    id,
    "aria-invalid": !!error,
  };

  return (
    <div className={`Input ${additionalClasses}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="Input__container">
        {leftElement && (
          <FieldElement position={FieldElement.position.left}>
            {leftElement}
          </FieldElement>
        )}

        <div className="Input__wrapper">
          {customInput ? (
            cloneElement(customInput, { ...baseInputProps, ...props })
          ) : (
            <input {...baseInputProps} {...props} />
          )}
        </div>

        {rightElement && (
          <FieldElement position={FieldElement.position.right}>
            {rightElement}
          </FieldElement>
        )}
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && (
        <FieldNote variant={FieldNote.variant.error}>{error}</FieldNote>
      )}
    </div>
  );
};

Input.displayName = "Input";
