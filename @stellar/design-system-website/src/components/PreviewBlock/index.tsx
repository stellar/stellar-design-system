import React, { cloneElement, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { Select } from "@stellar/design-system";
import { useComponentPreview } from "@site/src/hooks/useComponentPreview";
import { PlaygroundEditor } from "@site/src/theme/Playground";
import "./styles.css";

type Theme = "sds-theme-light" | "sds-theme-dark";

/**
 * This file handles the basic layout and logic for the PreviewBlock to render
 * components.
 *
 * The component logic is handled in useComponentPreview hook, where
 * all components are listed with custom options.
 *
 * Config file for every component is in /src/componentPreview directory. File
 * names are [componentName]Preview.
 */
export const PreviewBlock = ({ componentName }: { componentName: string }) => {
  const [theme, setTheme] = useState<Theme>("sds-theme-light");

  const { options, props, defaultComponent } =
    useComponentPreview(componentName);

  // Default component with props
  const component = cloneElement(defaultComponent, { ...props });

  return (
    <>
      <div className={`PreviewBlock ${theme}`}>
        <div className="PreviewBlock__controls">
          <Select
            id="theme"
            fieldSize="sm"
            onChange={(e) => {
              setTheme(
                e.target.value === "light"
                  ? "sds-theme-light"
                  : "sds-theme-dark",
              );
            }}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Select>

          {/* Component options */}
          {options}
        </div>

        <div className="PreviewBlock__component">{component}</div>
      </div>

      <PlaygroundEditor>{reactElementToJSXString(component)}</PlaygroundEditor>
    </>
  );
};
