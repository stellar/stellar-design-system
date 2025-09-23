import React, { cloneElement } from "react";
import { Label } from "../Label";
import { Icon } from "../../icons";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

/** Including all valid [select attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attributes). */
export interface SelectProps {
  /** ID of the select (should be unique) */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the select */
  fieldSize: "sm" | "md" | "lg";
  /** Select options or optgroup with options */
  children: React.ReactNode;
  /** Label of the select */
  label?: string | React.ReactNode;
  /** Adds suffix to the label */
  labelSuffix?: string | React.ReactNode;
  /** Note message of the select */
  note?: string | React.ReactNode;
  /** Error message of the select */
  error?: string | string;
  /** Success message of the input */
  success?: string | React.ReactNode;
  /** Info text tooltip */
  infoText?: string | React.ReactNode;
  /** Info text icon @defaultValue `<Icon.InfoCircle />` */
  infoTextIcon?: React.ReactNode;
  /** External link to open in new window */
  infoLink?: string;
  /** Info link icon @defaultValue `<Icon.BookOpen01 />` */
  infoLinkIcon?: React.ReactNode;
  /** Placement of tooltip relative to the label */
  tooltipPlacement?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-start"
    | "top-end"
    | "right-start"
    | "right-end"
    | "bottom-start"
    | "bottom-end"
    | "left-start"
    | "left-end";
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Select error without a message */
  isError?: boolean;
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
 * The `Select` component is a form `select` element that inherits all native HTML `select` element attributes.
 */
export const Select = ({
  id,
  fieldSize,
  children,
  label,
  labelSuffix,
  note,
  error,
  success,
  infoText,
  infoTextIcon = <Icon.InfoCircle />,
  infoLink,
  infoLinkIcon = <Icon.BookOpen01 />,
  tooltipPlacement,
  isLabelUppercase,
  isError,
  customSelect,
  ...props
}: Props): JSX.Element => {
  const additionalClasses = [
    `Select--${fieldSize}`,
    ...(props.disabled ? ["Select--disabled"] : []),
    ...(isError || error ? ["Select--error"] : []),
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
          size={fieldSize}
          labelSuffix={labelSuffix}
          infoText={infoText}
          infoTextIcon={infoTextIcon}
          infoLink={infoLink}
          infoLinkIcon={infoLinkIcon}
          tooltipPlacement={tooltipPlacement}
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

      {note && <FieldNote size={fieldSize}>{note}</FieldNote>}
      {error && (
        <FieldNote size={fieldSize} variant="error">
          {error}
        </FieldNote>
      )}
      {success && (
        <FieldNote size={fieldSize} variant="success">
          {success}
        </FieldNote>
      )}
    </div>
  );
};

Select.displayName = "Select";
