import "./styles.scss";

// =============================================================================
// Heading
// =============================================================================
interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  addlClasses?: string;
  size: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
}

export const Heading = ({
  as: HtmlTag,
  size,
  children,
  ...props
}: HeadingProps): JSX.Element => (
  <HtmlTag
    className={`Heading Heading--${size} ${props.addlClasses || ""}`}
    {...props}
  >
    {children}
  </HtmlTag>
);

Heading.displayName = "Heading";

// =============================================================================
// Caption
// =============================================================================
interface CaptionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size: "lg" | "md" | "sm" | "xs";
  addlClasses?: string;
  children: string | React.ReactNode;
}

export const Caption = ({
  size,
  children,
  ...props
}: CaptionProps): JSX.Element => (
  <div
    className={`Caption Caption--${size} ${props.addlClasses || ""}`}
    {...props}
  >
    {children}
  </div>
);

Caption.displayName = "Caption";

// =============================================================================
// Paragraph
// =============================================================================
interface ParagraphProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement | HTMLDivElement> {
  addlClasses?: string;
  size: "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
  asDiv?: boolean;
}

export const Paragraph = ({
  size,
  children,
  asDiv,
  ...props
}: ParagraphProps): JSX.Element => {
  const HtmlTag = asDiv ? "div" : "p";

  return (
    <HtmlTag
      className={`Paragraph Paragraph--${size} ${props.addlClasses || ""}`}
      {...props}
    >
      {children}
    </HtmlTag>
  );
};

Paragraph.displayName = "Paragraph";

// =============================================================================
// Title
// =============================================================================
interface TitleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  addlClasses?: string;
  size: "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
}

export const Title = ({
  size,
  children,
  ...props
}: TitleProps): JSX.Element => (
  <div className={`Title Title--${size} ${props.addlClasses || ""}`} {...props}>
    {children}
  </div>
);

Title.displayName = "Title";
