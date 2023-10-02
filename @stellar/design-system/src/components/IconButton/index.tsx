import React from "react";
import "./styles.scss";

/** Including all valid [button attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes) */
export interface IconButtonProps {
  /** Icon element */
  icon: React.ReactNode;
  /** Alternative text to show on hover */
  altText: string;
  /** Variant of the button */
  variant?: "default" | "error" | "success" | "warning" | "highlight";
  /** Button label */
  label?: string;
  /** Set custom color */
  customColor?: string;
  /** Set custom size */
  customSize?: string;
}

interface Props
  extends IconButtonProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * `IconButton` is similar to the {@link Button} component, and is used to trigger an action. There are five variants (color is the only difference): `default`, `error`, `success`, `warning`, and `highlight`.
 */
export const IconButton: React.FC<Props> = ({
  icon,
  altText,
  label,
  variant = "default",
  customColor,
  customSize,
  ...props
}: Props) => {
  const customStyle = {
    ...(customColor ? { "--IconButton-color": customColor } : {}),
    ...(customSize ? { "--IconButton-size": customSize } : {}),
  } as React.CSSProperties;

  return (
    <button
      className={`IconButton IconButton--${variant}`}
      title={altText}
      {...props}
      style={customStyle}
    >
      <>
        {label ? <span className="IconButton__label">{label}</span> : null}
        {icon}
      </>
    </button>
  );
};

IconButton.displayName = "IconButton";
