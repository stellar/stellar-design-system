import "./styles.scss";

// =============================================================================
// Heading
// =============================================================================
/** */
export interface HeadingProps {
  /** Heading level h1-h6 */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Additional classes */
  addlClassName?: string;
  /** Heading size */
  size: "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
  /** Heading text */
  children: string | React.ReactNode;
}

interface HProps
  extends HeadingProps,
    React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: string | React.ReactNode;
}

/**
 * HTML headings `h1` through `h6`.
 */
export const Heading: React.FC<HProps> = ({
  addlClassName,
  as: HtmlTag,
  size,
  children,
  ...props
}): JSX.Element => (
  <HtmlTag
    className={`Heading Heading--${size} ${addlClassName || ""}`}
    {...props}
  >
    {children}
  </HtmlTag>
);

Heading.displayName = "Heading";

// =============================================================================
// Caption
// =============================================================================
/** */
export interface CaptionProps {
  /** Caption size */
  size: "lg" | "md" | "sm" | "xs";
  /** Additional classes */
  addlClassName?: string;
  /** Caption text */
  children: string | React.ReactNode;
}

interface CProps
  extends CaptionProps,
    React.HtmlHTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
}

/**
 * Use `Caption` component for eyebrow subtitles paired with a title, and
 * secondary accent text in elements like badges and network status.
 */
export const Caption: React.FC<CProps> = ({
  addlClassName,
  size,
  children,
  ...props
}: CaptionProps) => (
  <div className={`Caption Caption--${size} ${addlClassName || ""}`} {...props}>
    {children}
  </div>
);

Caption.displayName = "Caption";

// =============================================================================
// Paragraph
// =============================================================================
interface ParagraphProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement | HTMLDivElement> {
  addlClassName?: string;
  size: "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
  asDiv?: boolean;
}

export const Paragraph = ({
  addlClassName,
  size,
  children,
  asDiv,
  ...props
}: ParagraphProps): JSX.Element => {
  const HtmlTag = asDiv ? "div" : "p";

  return (
    <HtmlTag
      className={`Paragraph Paragraph--${size} ${addlClassName || ""}`}
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
  addlClassName?: string;
  size: "lg" | "md" | "sm" | "xs";
  children: string | React.ReactNode;
}

export const Title = ({
  addlClassName,
  size,
  children,
  ...props
}: TitleProps): JSX.Element => (
  <div className={`Title Title--${size} ${addlClassName || ""}`} {...props}>
    {children}
  </div>
);

Title.displayName = "Title";
