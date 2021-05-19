import React from "react";
import "./styles.scss";
import { Icon } from "../../icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | React.ReactNode;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  ...props
}: CheckboxProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Checkbox--disabled"] : []),
  ].join(" ");

  return (
    <div className={`Checkbox ${additionalClasses}`}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>
        {label}
        <span className="Checkbox__icon" aria-hidden="true">
          <span>
            <Icon.Checkmark />
          </span>
        </span>
      </label>
    </div>
  );
};
