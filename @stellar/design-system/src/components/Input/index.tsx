import React from "react";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  leftElement?: string | React.ReactNode;
  rightElement?: string | React.ReactNode;
  note?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  leftElement,
  rightElement,
  note,
  error,
  ...props
}: InputProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["Input--disabled"] : []),
    ...(error ? ["Input--error"] : []),
  ].join(" ");

  return (
    <div className={`Input ${additionalClasses}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="Input__container">
        {leftElement && (
          <div className="Input__element--left">{leftElement}</div>
        )}

        <div className="Input__wrapper">
          <input id={id} aria-invalid={!!error} {...props} />
        </div>

        {rightElement && (
          <div className="Input__element--right">{rightElement}</div>
        )}
      </div>

      {note && <div className="Input__note">{note}</div>}
      {error && <div className="Input__note Input__note--error">{error}</div>}
    </div>
  );
};
