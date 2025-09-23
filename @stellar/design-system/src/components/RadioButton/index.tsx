import React from "react";
import "./styles.scss";

/** Including all valid [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). */
export interface RadioButtonProps {
  /** ID of the radio button (should be unique) */
  id: string;
  /** Label of the radio button */
  label: string | React.ReactNode;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the radio button */
  fieldSize: "sm" | "md" | "lg";
}

interface Props
  extends RadioButtonProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

/**
 * The `RadioButton` component is a form input element that allows you to select a single value from a group of options for submission. All native HTML `radio` input attributes apply.
 */
export const RadioButton = ({
  id,
  label,
  fieldSize,
  ...props
}: Props): JSX.Element => {
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
