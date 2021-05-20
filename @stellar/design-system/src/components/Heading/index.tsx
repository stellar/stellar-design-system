import React from "react";
import "./styles.scss";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: string | React.ReactNode;
}

const getHeadingComponent =
  (Component?: string): React.FC<HeadingProps> =>
  ({ children, ...props }) => {
    if (Component) {
      return <Component {...props}>{children}</Component>;
    }

    return (
      <div className="Eyebrow" {...props}>
        {children}
      </div>
    );
  };

export const Heading1 = getHeadingComponent("h1");
Heading1.displayName = "Heading1";
export const Heading2 = getHeadingComponent("h2");
Heading2.displayName = "Heading2";
export const Heading3 = getHeadingComponent("h3");
Heading3.displayName = "Heading3";
export const Heading4 = getHeadingComponent("h4");
Heading4.displayName = "Heading4";
export const Heading5 = getHeadingComponent("h5");
Heading5.displayName = "Heading5";
export const Heading6 = getHeadingComponent("h6");
Heading6.displayName = "Heading6";
export const Eyebrow = getHeadingComponent();
Eyebrow.displayName = "Eyebrow";
