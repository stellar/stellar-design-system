import React from "react";
import { InfoButtonWithTooltip } from "../InfoButtonWithTooltip";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  leftElement?: string | React.ReactNode;
  rightElement?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
  tooltipText?: string | React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  leftElement,
  rightElement,
  note,
  error,
  tooltipText,
  ...props
}: InputProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Input--disabled"] : []),
    ...(error ? ["Input--error"] : []),
  ].join(" ");

  return (
    <div className={`Input ${additionalClasses}`}>
      {label && <div className="InputLabel__wrapper">
        <label htmlFor={id}>{label}</label>
        {tooltipText && (
          <InfoButtonWithTooltip>{tooltipText}</InfoButtonWithTooltip>
        )}
      </div>}

      <div className="Input__container">
        {leftElement && (
          <FieldElement position={FieldElement.position.left}>
            {leftElement}
          </FieldElement>
        )}

        <div className="Input__wrapper">
          <input id={id} aria-invalid={!!error} {...props} />
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
