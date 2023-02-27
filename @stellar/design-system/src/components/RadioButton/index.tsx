import React from "react";
import "./styles.scss";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string | React.ReactNode;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  fieldSize,
  ...props
}: RadioButtonProps) => {
  const additionalClasses = [
    `RadioButton--${fieldSize}`,
    ...(props.disabled ? ["RadioButton--disabled"] : []),
  ].join(" ");

  return (
    <div className={`RadioButton ${additionalClasses}`}>
      <input type="radio" id={id} {...props} />
      <label htmlFor={id}>
        <span aria-hidden="true" />
        {label}
      </label>
    </div>
  );
};

RadioButton.displayName = "RadioButton";
