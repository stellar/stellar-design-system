import React from "react";
import Link from "@docusaurus/Link";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import rehypeSanitize from "rehype-sanitize";
import { unified } from "unified";
import * as prod from "react/jsx-runtime";

export type ElementKind = "text" | "code" | "inline-tag";

export interface ElementProps {
  text: string;
  kind: ElementKind | string;
  tag?: string;
}

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };

export const Element = ({ text, kind, tag }: ElementProps) => {
  switch (kind) {
    case "code":
      // Remove ``
      return <code>{text.slice(1, -1)}</code>;
    case "inline-tag":
      // Remove @ from tag to use as a slug for relative link
      return <Link to={`/${tag?.replace("@", "")}`}>{text}</Link>;
    // text is default
    default:
      return parseMarkdownString(text);
  }
};

const parseMarkdownString = (text: string): React.ReactElement => {
  const matches = text.match(/\[.*?\)/g);

  if (matches) {
    for (const m of matches) {
      const linkText = m.match(/\[(.*?)\]/)[1];
      const linkUrl = m.match(/\((.*?)\)/)[1];

      // TODO: can check if it's relative link
      text = text.replace(
        m,
        `<a href="${linkUrl}" target="_blank" rel="noreferrer noopener">${linkText}</a>`,
      );
    }
  }

  text = parseLineBreak(text);

  const file = unified()
    .use(rehypeSanitize)
    .use(rehypeParse, { fragment: true })
    .use(rehypeReact, production)
    .processSync(text);

  return file.result;
};

const parseLineBreak = (text: string) => {
  const lineBreakPattern = /\n\n/i;
  const matches = text.match(lineBreakPattern);

  if (matches) {
    return `${text.replace(lineBreakPattern, `<br><br>`)}`;
  }

  return text;
};
