import React from "react";
import "./styles.scss";
import { Icon } from "../../icons";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

export const Checkbox = ({ id, label, ...props }: CheckboxProps) => (
  <div className="Checkbox">
    <input type="checkbox" id={id} {...props} />
    <label htmlFor={id}>
      {label}
      <span className="CheckboxIconContainer" aria-hidden="true">
        <Icon.Checkmark />
      </span>
    </label>
  </div>
);
