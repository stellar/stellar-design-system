import React, { cloneElement } from "react";
import { Label } from "../Label";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
import "./styles.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
  children: React.ReactNode;
  label?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | string;
  isLabelUppercase?: boolean;
  isPill?: boolean;
  customSelect?: React.ReactElement;
}

export const Select: React.FC<SelectProps> = ({
  id,
  fieldSize,
  children,
  label,
  note,
  error,
  isLabelUppercase,
  isPill,
  customSelect,
  ...props
}: SelectProps) => {
  const additionalClasses = [
    `Select--${fieldSize}`,
    ...(props.disabled ? ["Select--disabled"] : []),
    ...(error ? ["Select--error"] : []),
    ...(isPill ? ["Select--pill"] : []),
  ].join(" ");

  const baseSelectProps = {
    id,
    "aria-invalid": !!error,
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
