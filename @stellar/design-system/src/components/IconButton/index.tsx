import React from "react";
import { Icon } from "../../icons";
import "./styles.scss";

enum IconButtonVariant {
  default = "default",
  error = "error",
  success = "success",
  warning = "warning",
  highlight = "highlight",
}

enum IconButtonPreset {
  copy = "copy",
  download = "download",
}

interface IconButtonComponent {
  variant: typeof IconButtonVariant;
  preset: typeof IconButtonPreset;
}

interface IconButtonBaseProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  label?: string;
  customColor?: string;
  customSize?: string;
}

interface IconButtonDefaultProps extends IconButtonBaseProps {
  icon: React.ReactNode;
  altText: string;
  preset?: IconButtonPreset;
}

interface IconButtonPresetProps extends IconButtonBaseProps {
  preset: IconButtonPreset;
  icon?: React.ReactNode;
  altText?: string;
}

type IconButtonProps = IconButtonDefaultProps | IconButtonPresetProps;

const presetDetails = {
  [IconButtonPreset.copy]: {
    label: "Copy",
    altText: "Copy",
    icon: <Icon.Copy />,
  },
  [IconButtonPreset.download]: {
    label: "Download",
    altText: "Download",
    icon: <Icon.Download />,
  },
};

export const IconButton: React.FC<IconButtonProps> & IconButtonComponent = ({
  icon,
  altText,
  label,
  variant = IconButtonVariant.default,
  preset,
  customColor,
  customSize,
  ...props
}: IconButtonProps) => {
  const customStyle = {
    ...(customColor ? { "--IconButton-color": customColor } : {}),
    ...(customSize ? { "--IconButton-size": customSize } : {}),
  } as React.CSSProperties;

  const renderContent = () => {
    if (preset) {
      return (
        <>
          <span className="IconButton__label">
            {label ?? presetDetails[preset].label}
          </span>
          {presetDetails[preset].icon}
        </>
      );
    }

    return (
      <>
        {label ? <span className="IconButton__label">{label}</span> : null}
        {icon}
      </>
    );
  };

  return (
    <button
      className={`IconButton IconButton--${variant}`}
      title={preset ? presetDetails[preset].altText : altText}
      {...props}
      style={customStyle}
    >
      {renderContent()}
    </button>
  );
};

IconButton.displayName = "IconButton";
IconButton.variant = IconButtonVariant;
IconButton.preset = IconButtonPreset;
