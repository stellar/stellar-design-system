import React from "react";
import "./styles.scss";
import { IconDropdown } from "../../icons";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label?: string;
  children: React.ReactNode;
}

export const Select = ({ id, label, children, ...props }: SelectProps) => (
  <div className="Select">
    {label && <label htmlFor={id}>{label}</label>}
    <div className="SelectWrapper" data-disabled={props.disabled}>
      <select id={id} {...props}>
        {children}
      </select>
      <span className="SelectIconWrapper" aria-hidden="true">
        <IconDropdown />
      </span>
    </div>
  </div>
);
