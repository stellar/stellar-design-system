import React, { cloneElement } from "react";
import { Label } from "../Label";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
import "./styles.scss";

/** Including all valid [select attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes) */
export interface SelectProps {
  /** ID of the select should be unique */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the select */
  fieldSize: "md" | "sm" | "xs";
  /** Select options or optgroup with options */
  children: React.ReactNode;
  /** Label of the select */
  label?: string | React.ReactNode;
  /** Note message of the select */
  note?: string | React.ReactNode;
  /** Error message of the select */
  error?: string | string;
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Pill shaped select */
  isPill?: boolean;
  /** Select error without a message */
  isError?: boolean;
  /** Select with extra padding */
  isExtraPadding?: boolean;
  /** Use a specific select rather than a generic HTML select (useful for Formik or otherwise controlled selects) */
  customSelect?: React.ReactElement;
}

interface Props
  extends SelectProps,
    React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  children: React.ReactNode;
}

/**
 * `Select` component is a form `select` element, which inherits all native HTML `select` element attributes.
 */
export const Select: React.FC<Props> = ({
  id,
  fieldSize,
  children,
  label,
  note,
  error,
  isLabelUppercase,
  isPill,
  isError,
  isExtraPadding,
  customSelect,
  ...props
}: Props) => {
  const additionalClasses = [
    `Select--${fieldSize}`,
    ...(props.disabled ? ["Select--disabled"] : []),
    ...(isError || error ? ["Select--error"] : []),
    ...(isPill ? ["Select--pill"] : []),
    ...(isExtraPadding ? ["Select--extra-padding"] : []),
  ].join(" ");

  const baseSelectProps = {
    id,
    "aria-invalid": !!(isError || error),
  };

  return (
    <div className={`Select ${additionalClasses}`}>
      {label && (
        <Label
          htmlFor={id}
          isUppercase={isLabelUppercase}
          size={fieldSize === "xs" ? "xs" : "sm"}
        >
          {label}
        </Label>
      )}

      <div className="Select__container">
        {customSelect ? (
          cloneElement(customSelect, { ...baseSelectProps, ...props })
        ) : (
          <>
            <select {...baseSelectProps} {...props}>
              {children}
            </select>
            <span className="Select__icon" aria-hidden="true">
              <Icon.ChevronDown />
            </span>
          </>
        )}
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Select.displayName = "Select";
