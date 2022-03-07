import React from "react";
import "./styles.scss";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  note,
  error,
  ...props
}: CheckboxProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Checkbox--disabled"] : []),
    ...(error ? ["Checkbox--error"] : []),
  ].join(" ");

  return (
    <div className={`Checkbox ${additionalClasses}`}>
      <div className="Checkbox__container">
        <input type="checkbox" id={id} {...props} />
        <label htmlFor={id}>
          {label}
          <span className="Checkbox__icon" aria-hidden="true">
            <span>
              <Icon.Check />
            </span>
          </span>
        </label>
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && (
        <FieldNote variant={FieldNote.variant.error}>{error}</FieldNote>
      )}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
