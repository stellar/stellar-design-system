import React from "react";
import { Icon } from "../../icons";

/** Including all valid [button attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes). */
export interface ButtonPresetProps {
  /** Button preset */
  preset: "copy" | "download";
  /** Button variant @defaultValue `default` */
  variant?: "default" | "highlight";
  /** Button label */
  label?: string;
  /** Alternative text to show on hover */
  altText?: string;
  /** Set custom color */
  customColor?: string;
  /** Set custom size */
  customSize?: string;
}

interface Props
  extends ButtonPresetProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

const presetDetails = {
  copy: {
    label: "Copy",
    altText: "Copy",
    icon: <Icon.Copy01 />,
  },
  download: {
    label: "Download",
    altText: "Download",
    icon: <Icon.Download01 />,
  },
};

/**
 * `ButtonPreset` is similar to the {@link Button} component, and is used to trigger an action. There are two presets: `copy` and `download` and two variants
 * for color: `default` and `highlight`.
 */
export const ButtonPreset = ({
  altText,
  label,
  variant = "default",
  preset,
  customColor,
  customSize,
  ...props
}: Props): React.ReactElement => {
  const customStyle = {
    ...(customColor ? { "--IconButton-color": customColor } : {}),
    ...(customSize ? { "--IconButton-size": customSize } : {}),
  } as React.CSSProperties;

  return (
    <button
      className={`IconButton IconButton--${variant}`}
      title={altText ?? presetDetails[preset].altText}
      {...props}
      style={customStyle}
    >
      <>
        <span className="IconButton__label">
          {label ?? presetDetails[preset].label}
        </span>
        {presetDetails[preset].icon}
      </>
    </button>
  );
};

ButtonPreset.displayName = "ButtonPreset";
