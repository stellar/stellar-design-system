import React, { cloneElement, useLayoutEffect, useRef, useState } from "react";
import { Label } from "../Label";
import { Icon } from "../../icons";
import { FieldNote } from "../utils/FieldNote";
import "./styles.scss";

/** Including all valid [input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes). */
export interface InputProps {
  /** ID of the input should be unique */
  id: string;
  // Note: cannot use "size" here because it's input's native property
  /** Size of the input */
  fieldSize: "md" | "sm" | "xs";
  /** Label of the input */
  label?: string | React.ReactNode;
  /** Make label uppercase */
  isLabelUppercase?: boolean;
  /** Pill shaped input */
  isPill?: boolean;
  /** Input error without a message */
  isError?: boolean;
  /** Input with extra padding */
  isExtraPadding?: boolean;
  /** Password input preset with show/hide button */
  isPassword?: boolean;
  /** Right side element of the input */
  rightElement?: string | React.ReactNode;
  /** Note message of the input */
  note?: string | React.ReactNode;
  /** Error message of the input */
  error?: string | React.ReactNode;
  /** Use a specific input rather than a generic HTML input (useful for Formik or otherwise controlled inputs) */
  customInput?: React.ReactElement;
}

interface Props
  extends InputProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

/**
 * The `input` component is a form input element that inherits all native HTML `input` element attributes.
 */
export const Input: React.FC<Props> = ({
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
}: Props) => {
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
              type="button"
              onClick={(event) => {
                event?.preventDefault();
                setIsPasswordMasked(!isPasswordMasked);
              }}
            >
              {isPasswordMasked ? <Icon.EyeOff /> : <Icon.Eye />}
            </button>
          </div>
        )}
      </div>

      {note && <FieldNote size={fieldSize}>{note}</FieldNote>}
      {error && (
        <FieldNote size={fieldSize} variant="error">
          {error}
        </FieldNote>
      )}
    </div>
  );
};

Input.displayName = "Input";
