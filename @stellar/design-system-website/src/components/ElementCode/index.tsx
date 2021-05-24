import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
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
