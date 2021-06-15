import React from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import reactElementToJSXString from "react-element-to-jsx-string";

import "./styles.scss";

export const ElementCode = ({
  element,
  id,
}: {
  element: React.ReactNode;
  id: number;
}) => (
  <div className="ElementCode">
    <Highlight
      {...defaultProps}
      theme={customTheme}
      language="tsx"
      code={reactElementToJSXString(element, {
        showFunctions: true,
      })}
      key={`element-code-${id}`}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              <span className="ElementCode__line-number">{i + 1}</span>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  </div>
);

// TODO: update theme to match
const customTheme: PrismTheme = {
  plain: {
    backgroundColor: "var(--pal-example-code)",
    color: "#9a86fd",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "#ffcc99",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
      },
    },
  ],
};
