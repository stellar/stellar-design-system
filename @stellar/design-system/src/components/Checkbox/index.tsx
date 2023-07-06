import React from "react";
import "./styles.scss";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
  label?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
  isError?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  fieldSize,
  label,
  note,
  error,
  isError,
  ...props
}: CheckboxProps) => {
  const additionalClasses = [
    `Checkbox--${fieldSize}`,
    ...(props.disabled ? ["Checkbox--disabled"] : []),
    ...(isError || error ? ["Checkbox--error"] : []),
  ].join(" ");

  const baseCheckboxProps = {
    id,
    "aria-invalid": !!(isError || error),
  };

  return (
    <div className={`Checkbox ${additionalClasses}`}>
      <div className="Checkbox__container">
        <input type="checkbox" {...baseCheckboxProps} {...props} />
        <label htmlFor={id}>
          <span aria-hidden="true" data-has-label={!!label}>
            <Icon.Check />
          </span>
          {label ? label : null}
        </label>
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Checkbox.displayName = "Checkbox";
