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
 * Use `Heading` for HTML headings `h1` through `h6`.
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
 * Use the `Caption` component for eyebrow subtitles paired with a title and
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
/** */
export interface ParagraphProps {
  /** Additional classes */
  addlClassName?: string;
  /** Paragraph size */
  size: "lg" | "md" | "sm" | "xs";
  /** Render paragraph as div */
  asDiv?: boolean;
  /** Paragraph text */
  children: string | React.ReactNode;
}

interface PProps
  extends ParagraphProps,
    React.HtmlHTMLAttributes<HTMLParagraphElement | HTMLDivElement> {
  children: string | React.ReactNode;
}

/**
 * The text paragraph is an HTML `p` (or `div`) tag, not a custom component.
 */
export const Paragraph: React.FC<PProps> = ({
  addlClassName,
  size,
  children,
  asDiv,
  ...props
}: ParagraphProps) => {
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
/** */
export interface TitleProps {
  /** Additional classes */
  addlClassName?: string;
  /** Title size */
  size: "lg" | "md" | "sm" | "xs";
  /** Title text */
  children: string | React.ReactNode;
}

interface TProps extends TitleProps, React.HtmlHTMLAttributes<HTMLDivElement> {
  children: string | React.ReactNode;
}

/**
 * Use the `Title` component when a semantic heading is not needed. For example, in a
 * banner title, navigation item, label, etc.
 */
export const Title: React.FC<TProps> = ({
  addlClassName,
  size,
  children,
  ...props
}) => (
  <div className={`Title Title--${size} ${addlClassName || ""}`} {...props}>
    {children}
  </div>
);

Title.displayName = "Title";
