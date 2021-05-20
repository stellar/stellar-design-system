import React from "react";
import "./styles.scss";

enum IconButtonVariant {
  default = "default",
  error = "error",
  success = "success",
  warning = "warning",
  highlight = "highlight",
}

interface IconButtonComponent {
  variant: typeof IconButtonVariant;
}

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  altText: string;
  variant?: IconButtonVariant;
  customColor?: string;
  customSize?: string;
}

export const IconButton: React.FC<IconButtonProps> & IconButtonComponent = ({
  icon,
  altText,
  variant = IconButtonVariant.default,
  customColor,
  customSize,
  ...props
}: IconButtonProps) => {
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
      {icon}
    </button>
  );
};

IconButton.displayName = "IconButton";
IconButton.variant = IconButtonVariant;
