import React from "react";
import { FieldElement } from "../utils/FieldElement";
import { FieldNote } from "../utils/FieldNote";
import { Icon } from "../../icons";
import "./styles.scss";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string | React.ReactNode;
  leftElement?: string | React.ReactNode;
  rightElement?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | string;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  id,
  label,
  leftElement,
  rightElement,
  note,
  error,
  children,
  ...props
}: SelectProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Select--disabled"] : []),
    ...(error ? ["Select--error"] : []),
  ].join(" ");

  return (
    <div className={`Select ${additionalClasses}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="Select__container">
        {leftElement && (
          <FieldElement position={FieldElement.position.left}>
            {leftElement}
          </FieldElement>
        )}

        <div className="Select__wrapper">
          <select id={id} {...props}>
            {children}
          </select>
          <span className="Select__icon" aria-hidden="true">
            <Icon.ChevronDown />
          </span>
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

Select.displayName = "Select";
