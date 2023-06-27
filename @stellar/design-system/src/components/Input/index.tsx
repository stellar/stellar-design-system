import React, { cloneElement, useLayoutEffect, useRef, useState } from "react";
import { Label } from "../Label";
import { Icon } from "../../icons";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  // Note: cannot use "size" here because it's input's native property
  fieldSize: "md" | "sm" | "xs";
  label?: string | React.ReactNode;
  isLabelUppercase?: boolean;
  isPill?: boolean;
  isError?: boolean;
  isExtraPadding?: boolean;
  isPassword?: boolean;
  rightElement?: string | React.ReactNode;
  note?: string | React.ReactNode;
  error?: string | React.ReactNode;
  customInput?: React.ReactElement;
}

export const Input: React.FC<InputProps> = ({
  customInput,
  id,
  label,
  fieldSize,
  isLabelUppercase,
  isPill,
  isError,
  isExtraPadding,
  isPassword,
  rightElement,
  note,
  error,
  ...props
}: InputProps) => {
  const [sideElWidthRem, setSideElWidthRem] = useState(0);
  const [isPasswordMasked, setIsPasswordMasked] = useState(true);
  const sideEl = useRef<HTMLDivElement | null>(null);

  const getRightSideElWidth = () => {
    if (sideEl?.current) {
      // Dividing by 16 base font size to get em
      setSideElWidthRem(sideEl.current.getBoundingClientRect().width / 16);
    }
  };

  useLayoutEffect(() => {
    getRightSideElWidth();
  }, []);

  const additionalClasses = [
    `Input--${fieldSize}`,
    ...(props.disabled ? ["Input--disabled"] : []),
    ...(isError || error ? ["Input--error"] : []),
    ...(isPill ? ["Input--pill"] : []),
    ...(isExtraPadding ? ["Input--extra-padding"] : []),
  ].join(" ");

  const inputPaddingRight =
    sideElWidthRem !== 0
      ? `calc(var(--Input-padding-horizontal) * 2 + ${sideElWidthRem}rem)`
      : "";

  const baseInputProps = {
    id,
    "aria-invalid": !!(isError || error),
    ...(inputPaddingRight
      ? { style: { paddingRight: inputPaddingRight } }
      : {}),
  };

  return (
    <div className={`Input ${additionalClasses}`}>
      {label && (
        <Label
          htmlFor={id}
          isUppercase={isLabelUppercase}
          size={fieldSize === "xs" ? "xs" : "sm"}
        >
          {label}
        </Label>
      )}

      <div className="Input__container">
        {customInput ? (
          cloneElement(customInput, { ...baseInputProps, ...props })
        ) : (
          <input
            {...baseInputProps}
            {...props}
            {...(isPassword
              ? { type: isPasswordMasked ? "password" : "text" }
              : {})}
          />
        )}

        {rightElement && (
          <div ref={sideEl} className="Input__side-element">
            {rightElement}
          </div>
        )}

        {isPassword && (
          <div className="Input__side-element">
            <button
              className="PasswordMaskToggle"
              onClick={(event) => {
                event?.preventDefault();
                setIsPasswordMasked(!isPasswordMasked);
              }}
            >
              {isPasswordMasked ? <Icon.Hide /> : <Icon.Show />}
            </button>
          </div>
        )}
      </div>

      {note && <FieldNote>{note}</FieldNote>}
      {error && <FieldNote variant="error">{error}</FieldNote>}
    </div>
  );
};

Input.displayName = "Input";
