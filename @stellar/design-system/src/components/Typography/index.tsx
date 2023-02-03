import "./styles.scss";

// =============================================================================
// Heading
// =============================================================================
interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
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
    className={`Heading Heading--${size} ${props.className || ""}`}
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
  children: string | React.ReactNode;
}

export const Caption = ({
  size,
  children,
  ...props
}: CaptionProps): JSX.Element => (
  <div
    className={`Caption Caption--${size} ${props.className || ""}`}
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
      className={`Paragraph Paragraph--${size} ${props.className || ""}`}
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
  size: "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
}

export const Title = ({
  size,
  children,
  ...props
}: TitleProps): JSX.Element => (
  <div className={`Title Title--${size} ${props.className || ""}`} {...props}>
    {children}
  </div>
);

Title.displayName = "Title";
