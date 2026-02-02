import "./styles.scss";

// =============================================================================
// Display
// =============================================================================
/** */
export interface DisplayProps {
  /** Display as `div` or `span` @defaultValue `div` */
  as?: "div" | "span";
  /** Additional classes */
  addlClassName?: string;
  /** Display size */
  size: "xl" | "lg" | "md" | "sm" | "xs";
  /** Display font weight @defaultValue `regular` */
  weight?: "bold" | "semi-bold" | "medium" | "regular";
  /** Display text */
  children: string | React.ReactNode;
}

interface DProps
  extends
    DisplayProps,
    React.HtmlHTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  children: string | React.ReactNode;
}

/**
 * Use `Display` for generic titles and captions using `div` and `span` elements.
 */
export const Display = ({
  addlClassName,
  as: HtmlTag = "div",
  size,
  weight = "regular",
  children,
  ...props
}: DProps): React.ReactElement => (
  <HtmlTag
    className={`Display Display--${size} ${
      weight !== "regular" ? `Display--w-${weight}` : ""
    } ${addlClassName || ""}`}
    {...props}
  >
    {children}
  </HtmlTag>
);

Display.displayName = "Display";

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
  size: "xl" | "lg" | "md" | "sm" | "xs";
  /** Heading font weight @defaultValue `regular` */
  weight?: "bold" | "semi-bold" | "medium" | "regular";
  /** Heading text */
  children: string | React.ReactNode;
}

interface HProps
  extends HeadingProps, React.HtmlHTMLAttributes<HTMLHeadingElement> {
  children: string | React.ReactNode;
}

/**
 * Use `Heading` for HTML headings `h1` through `h6`.
 */
export const Heading = ({
  addlClassName,
  as: HtmlTag,
  size,
  weight = "regular",
  children,
  ...props
}: HProps): React.ReactElement => (
  <HtmlTag
    className={`Heading Heading--${size} ${
      weight !== "regular" ? `Heading--w-${weight}` : ""
    } ${addlClassName || ""}`}
    {...props}
  >
    {children}
  </HtmlTag>
);

Heading.displayName = "Heading";

// =============================================================================
// Text
// =============================================================================
/** */
export interface TextProps {
  /** Text as `p`, `div`, `span`, or `h1` through `h6` */
  as: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Additional classes */
  addlClassName?: string;
  /** Text size */
  size: "xl" | "lg" | "md" | "sm" | "xs";
  /** Text font weight @defaultValue `regular` */
  weight?: "bold" | "semi-bold" | "medium" | "regular";
  /** Text content */
  children: string | React.ReactNode;
}

interface TProps
  extends
    TextProps,
    React.HtmlHTMLAttributes<
      HTMLParagraphElement | HTMLDivElement | HTMLSpanElement
    > {
  children: string | React.ReactNode;
}

/**
 * `Text` is an HTML `p`, `div`, `span`, or heading `h1` through `h6` element tag used to display text.
 */
export const Text = ({
  as: HtmlTag,
  addlClassName,
  size,
  weight = "regular",
  children,
  ...props
}: TProps): React.ReactElement => (
  <HtmlTag
    className={`Text Text--${size} ${
      weight !== "regular" ? `Text--w-${weight}` : ""
    } ${addlClassName || ""}`}
    {...props}
  >
    {children}
  </HtmlTag>
);

Text.displayName = "Text";

// =============================================================================
// Code
// =============================================================================
/** */
export interface CodeProps {
  /** Additional classes */
  addlClassName?: string;
  /** Code size */
  size: "md" | "sm" | "xs";
  /** Code content */
  children: string | React.ReactNode;
}

interface CProps extends CodeProps, React.HtmlHTMLAttributes<HTMLElement> {
  children: string | React.ReactNode;
}

/**
 * `Code` is an HTML `code` tag used to display text in computer code style
 * (monospace font).
 */
export const Code = ({
  addlClassName,
  size,
  children,
  ...props
}: CProps): React.ReactElement => (
  <code className={`Code Code--${size} ${addlClassName || ""}`} {...props}>
    {children}
  </code>
);

Code.displayName = "code";
