import React from "react";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
import "./styles.scss";

/** Including all valid [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). */
export interface CheckboxProps {
  /** ID of the checkbox (should be unique) */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the checkbox */
  fieldSize: "md" | "sm" | "xs";
  /** Label of the checkbox */
  label?: string | React.ReactNode;
  /** Note message of the checkbox */
  note?: string | React.ReactNode;
  /** Error message of the checkbox */
  error?: string | React.ReactNode;
  /** Checkbox error without a message */
  isError?: boolean;
}

interface Props
  extends CheckboxProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

/**
 * The `checkbox` component is a form input element that allows you to select single values for submission. All native HTML `checkbox` input attributes apply.
 */
export const Checkbox: React.FC<Props> = ({
  id,
  fieldSize,
  label,
  note,
  error,
  isError,
  ...props
}: Props) => {
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
