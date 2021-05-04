import React from "react";
import "./styles.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string;
}

const getHeadingComponent = (Component: string): React.FC<HeadingProps> => ({
  children,
  ...props
}) => <Component {...props}>{children}</Component>;

export const Heading1 = getHeadingComponent("h1");
export const Heading2 = getHeadingComponent("h2");
export const Heading3 = getHeadingComponent("h3");
export const Heading4 = getHeadingComponent("h4");
export const Heading5 = getHeadingComponent("h5");
