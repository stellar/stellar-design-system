import React, { cloneElement } from "react";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

// TODO: move it's own component

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string | React.ReactNode;
  htmlFor: string;
  isUppercase?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  isUppercase,
  ...props
}: LabelProps) => {
  const additionalClasses = [...(isUppercase ? ["Label--uppercase"] : [])].join(
    " ",
  );

  return (
    <label
      className={`Label ${additionalClasses}`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

Label.displayName = "Label";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customInput?: React.ReactElement;
  id: string;
  label?: string | React.ReactNode;
  isLabelUppercase?: boolean;
  rightElement?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  customInput,
  id,
  label,
  isLabelUppercase,
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
      {label && (
        <Label htmlFor={id} isUppercase={isLabelUppercase}>
          {label}
        </Label>
      )}

      <div className="Input__container">
        <div className="Input__wrapper">
          {customInput ? (
            cloneElement(customInput, { ...baseInputProps, ...props })
          ) : (
            <input {...baseInputProps} {...props} />
          )}
        </div>

        {/* TODO: update this */}
        {rightElement && (
          <FieldElement position={FieldElement.position.right}>
            {rightElement}
          </FieldElement>
        )}
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Input.displayName = "Input";
