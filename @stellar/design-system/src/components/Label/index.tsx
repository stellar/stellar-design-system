import React from "react";
import "./styles.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string | React.ReactNode;
  htmlFor: string;
  size?: "sm" | "xs";
  isUppercase?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = "sm",
  isUppercase,
  ...props
}: LabelProps) => {
  const additionalClasses = [
    `Label--${size}`,
    ...(isUppercase ? ["Label--uppercase"] : []),
  ].join(" ");

  return (
    <label
      className={`Label ${additionalClasses}`}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  );
};

Label.displayName = "Label";
