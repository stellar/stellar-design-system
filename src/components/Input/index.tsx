import React from "react";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  rightElement?: string;
  note?: React.ReactNode;
  error?: string;
}

export const Input = ({
  id,
  label,
  rightElement,
  note,
  error,
  ...props
}: InputProps) => (
  <div className="Input">
    {label && <label htmlFor={id}>{label}</label>}
    <div className="InputContainer">
      <div className="InputWrapper" data-disabled={props.disabled}>
        <input id={id} aria-invalid={!!error} {...props} />
      </div>
      {rightElement && <div className="InputRightElement">{rightElement}</div>}
    </div>
    {error && <div className="InputError">{error}</div>}
    {note && <div className="InputNote">{note}</div>}
  </div>
);
