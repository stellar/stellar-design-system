import React, { cloneElement, useEffect, useState } from "react";
import "./styles.scss";

/** */
export interface ToggleProps {
  /** ID of the toggle (should be unique) */
  id: string;
  /** If `true` the toggle state is "on" */
  checked: boolean;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the toggle */
  fieldSize: "sm" | "md" | "lg";
  /** Use a specific input rather than a generic HTML input (useful for Formik or otherwise controlled inputs) */
  customInput?: React.ReactElement;
  /** Function to handle the toggle state change */
  onChange?: () => void;
  /** Disable the toggle */
  disabled?: boolean;
  /** Icon to show when unchecked */
  iconUnchecked?: React.ReactNode;
  /** Icon to show when checked */
  iconChecked?: React.ReactNode;
  /** Title text */
  title?: string;
}

interface Props
  extends ToggleProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  onChange?: () => void;
  checked: boolean;
}

/**
 * The `Toggle` component is similar to `Checkbox` component, which allows you to toggle/switch between on and off states.
 */
export const Toggle = ({
  id,
  checked,
  fieldSize,
  customInput,
  onChange,
  disabled,
  iconChecked,
  iconUnchecked,
  title,
}: Props): JSX.Element => {
  const [checkedValue, setCheckedValue] = useState(checked);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  const additionalClasses = [
    `Toggle--${fieldSize}`,
    ...(disabled ? ["Toggle--disabled"] : []),
  ].join(" ");

  const baseInputProps = {
    className: "Toggle__input",
    type: "checkbox",
    name: id,
    id,
    disabled,
  };

  return (
    <label className={`Toggle ${additionalClasses}`} htmlFor={id} title={title}>
      {customInput ? (
        cloneElement(customInput, { ...baseInputProps })
      ) : (
        <input checked={checkedValue} onChange={onChange} {...baseInputProps} />
      )}

      <div className="Toggle__track">
        <div className="Toggle__track__thumb">
          {iconChecked ? (
            <div className="Toggle__track__icon Toggle__track__icon--checked">
              {iconChecked}
            </div>
          ) : null}
          {iconUnchecked ? (
            <div className="Toggle__track__icon Toggle__track__icon--unchecked">
              {iconUnchecked}
            </div>
          ) : null}
        </div>
      </div>
    </label>
  );
};

Toggle.displayName = "Toggle";
