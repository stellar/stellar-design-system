import React, { cloneElement, useEffect, useState } from "react";
import "./styles.scss";

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  customInput?: React.ReactElement;
  onChange?: () => void;
  disabled?: boolean;
}

export const Toggle: React.FC<ToggleProps> = ({
  id,
  checked,
  customInput,
  onChange,
  disabled,
}: ToggleProps) => {
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
