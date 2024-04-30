import React from "react";
import { Tooltip } from "../Tooltip";
import { Icon } from "../../icons";
import "./styles.scss";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: string | React.ReactNode;
  htmlFor: string;
  size: "sm" | "md" | "lg";
  isUppercase?: boolean;
  labelSuffix?: string | React.ReactNode;
  infoText?: string | React.ReactNode;
  infoTextIcon?: React.ReactNode;
}

export const Label: React.FC<LabelProps> = ({
  children,
  htmlFor,
  size = "sm",
  isUppercase,
  labelSuffix,
  infoText,
  infoTextIcon = <Icon.InfoCircle />,
  ...props
}: LabelProps) => {
  const additionalClasses = [
    `Label--${size}`,
    ...(isUppercase ? ["Label--uppercase"] : []),
  ].join(" ");

  return (
    <div className="Label__wrapper">
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

      {infoText ? (
        <Tooltip
          triggerEl={
            <div className="Label__infoButton" role="button">
              {infoTextIcon}
            </div>
          }
        >
          {infoText}
        </Tooltip>
      ) : null}
    </div>
  );
};

Label.displayName = "Label";
