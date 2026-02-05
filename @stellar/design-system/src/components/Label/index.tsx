import React from "react";
import { Placement } from "@floating-ui/dom";
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
  infoLink?: string;
  infoLinkIcon?: React.ReactNode;
  tooltipPlacement?: Placement;
}

export const Label = ({
  children,
  htmlFor,
  size = "sm",
  isUppercase,
  labelSuffix,
  infoText,
  infoTextIcon = <Icon.InfoCircle />,
  infoLink,
  infoLinkIcon = <Icon.BookOpen01 />,
  tooltipPlacement,
  ...props
}: LabelProps): React.ReactElement => {
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

      {infoLink ? (
        <a
          href={infoLink}
          className="Label__infoButton"
          rel="noreferrer noopener"
          target="_blank"
        >
          {infoLinkIcon}
        </a>
      ) : null}

      {infoText ? (
        <Tooltip
          triggerEl={
            <div className="Label__infoButton" role="button">
              {infoTextIcon}
            </div>
          }
          placement={tooltipPlacement}
        >
          {infoText}
        </Tooltip>
      ) : null}
    </div>
  );
};

Label.displayName = "Label";
