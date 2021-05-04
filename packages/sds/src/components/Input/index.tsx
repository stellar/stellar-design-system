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

    <div className="Input__container">
      {/* TODO: create a helper for disabled as it will be used often */}
      <div className={`Input__wrapper ${props.disabled ? "disabled" : ""}`}>
        <input id={id} aria-invalid={!!error} {...props} />
      </div>

      {rightElement && (
        <div className="Input__element--right">{rightElement}</div>
      )}
    </div>

    {error && <div className="Input__note error">{error}</div>}
    {note && <div className="Input__note">{note}</div>}
  </div>
);
