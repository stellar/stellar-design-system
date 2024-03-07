import React from "react";
import "./styles.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string | React.ReactNode;
  htmlFor: string;
  size: "sm" | "md" | "lg";
  isUppercase?: boolean;
  labelSuffix?: string | React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = "sm",
  isUppercase,
  labelSuffix,
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
      {labelSuffix ? (
        <span className="Label__suffix">({labelSuffix})</span>
      ) : null}
    </label>
  );
};

Label.displayName = "Label";
