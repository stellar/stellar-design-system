import React, { useEffect, useState } from "react";
import "./styles.scss";

enum LabelPosition {
  left = "left",
  right = "right",
}

interface ToggleComponent {
  labelPosition: typeof LabelPosition;
}

interface ToggleProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  labelOn?: string;
  labelOff?: string;
  labelPosition?: LabelPosition;
}

export const Toggle: React.FC<ToggleProps> & ToggleComponent = ({
  id,
  checked,
  onChange,
  disabled,
  labelOn,
  labelOff,
  labelPosition = LabelPosition.left,
}: ToggleProps) => {
  const [checkedValue, setCheckedValue] = useState(checked);

  useEffect(() => {
    setCheckedValue(checked);
  }, [checked]);

  const additionalClasses = [...(disabled ? ["Toggle--disabled"] : [])].join(
    " ",
  );

  const renderLabel = () => <span>{checked ? labelOn : labelOff}</span>;

  return (
    <label className={`Toggle ${additionalClasses}`} htmlFor={id}>
      <input
        className="Toggle__input"
        type="checkbox"
        name={id}
        id={id}
        checked={checkedValue}
        onChange={onChange}
        disabled={disabled}
      />
      {labelPosition === LabelPosition.left ? renderLabel() : null}
      <div className="Toggle__track" />
      {labelPosition === LabelPosition.right ? renderLabel() : null}
    </label>
  );
};

Toggle.displayName = "Toggle";
Toggle.labelPosition = LabelPosition;
