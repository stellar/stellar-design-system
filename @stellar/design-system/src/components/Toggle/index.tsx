import React, { cloneElement, useEffect, useState } from "react";
import "./styles.scss";

/** */
export interface ToggleProps {
  /** ID of the toggle should be unique */
  id: string;
  /** If `true` the toggle state is "on" */
  checked: boolean;
  /** Use a specific input rather than a generic HTML input (useful for Formik or otherwise controlled inputs) */
  customInput?: React.ReactElement;
  /** Function to handle the toggle state change */
  onChange?: () => void;
  /** Disable the toggle */
  disabled?: boolean;
}

interface Props
  extends ToggleProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onChange?: () => void;
  checked: boolean;
}

/**
 * `Toggle` component is similar to `Checkbox` component, which allows to toggle/switch between on and off states.
 */
export const Toggle: React.FC<Props> = ({
  id,
  checked,
  customInput,
  onChange,
  disabled,
}: Props) => {
  const [checkedValue, setCheckedValue] = useState(checked);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  const additionalClasses = [...(disabled ? ["Toggle--disabled"] : [])].join(
    " ",
  );

  const baseInputProps = {
    className: "Toggle__input",
    type: "checkbox",
    name: id,
    id,
    disabled,
  };

  return (
    <label className={`Toggle ${additionalClasses}`} htmlFor={id}>
      {customInput ? (
        cloneElement(customInput, { ...baseInputProps })
      ) : (
        <input checked={checkedValue} onChange={onChange} {...baseInputProps} />
      )}

      <div className="Toggle__track" />
    </label>
  );
};

Toggle.displayName = "Toggle";
