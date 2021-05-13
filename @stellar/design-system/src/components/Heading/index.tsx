import React from "react";
import "./styles.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string | React.ReactNode;
}

const getHeadingComponent = (Component?: string): React.FC<HeadingProps> => ({
  children,
  ...props
}) => {
  if (Component) {
    return <Component {...props}>{children}</Component>;
  }

  return <div className="Eyebrow">{children}</div>;
};

export const Heading1 = getHeadingComponent("h1");
export const Heading2 = getHeadingComponent("h2");
export const Heading3 = getHeadingComponent("h3");
export const Heading4 = getHeadingComponent("h4");
export const Heading5 = getHeadingComponent("h5");
export const Heading6 = getHeadingComponent("h6");
export const Eyebrow = getHeadingComponent();
