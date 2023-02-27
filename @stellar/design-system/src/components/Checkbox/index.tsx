import React from "react";
import "./styles.scss";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
  label: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  fieldSize,
  label,
  note,
  error,
  ...props
}: CheckboxProps) => {
  const additionalClasses = [
    `Checkbox--${fieldSize}`,
    ...(props.disabled ? ["Checkbox--disabled"] : []),
    ...(error ? ["Checkbox--error"] : []),
  ].join(" ");

  return (
    <div className={`Checkbox ${additionalClasses}`}>
      <div className="Checkbox__container">
        <input type="checkbox" id={id} {...props} />
        <label htmlFor={id}>
          <span aria-hidden="true">
            <Icon.Check />
          </span>
          {label}
        </label>
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
