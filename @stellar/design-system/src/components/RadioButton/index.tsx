import React from "react";
import "./styles.scss";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  ...props
}: RadioButtonProps) => {
  const additionalClasses = [
    ...(props.disabled ? ["RadioButton--disabled"] : []),
  ].join(" ");

  return (
    <div className={`RadioButton ${additionalClasses}`}>
      <input type="radio" id={id} {...props} />
      <label htmlFor={id}>
        {label}
        <span className="RadioButton__icon" aria-hidden="true">
          <span />
        </span>
      </label>
    </div>
  );
};

RadioButton.displayName = "RadioButton";
