import React, { cloneElement, useEffect, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { PlaygroundEditor } from "@site/src/theme/Playground";
import "./styles.css";

// Previews
import { ButtonPreview } from "@site/src/componentPreview/ButtonPreview";

type Theme = "sds-theme-light" | "sds-theme-dark";

// Types
export type PreviewOptionType = "select" | "checkbox";

interface PreviewOptionBase {
  type: PreviewOptionType;
  prop: string;
  enabledByProp?: string;
  clearProp?: string;
}

interface PreviewOptionSelect extends PreviewOptionBase {
  options: {
    value: string;
    label: string;
  }[];
}

interface PreviewOptionCheckbox extends PreviewOptionBase {
  label: string;
  customValue?: any;
}

export type ComponentPreview = {
  options: (PreviewOptionSelect | PreviewOptionCheckbox)[];
};

/**
 * This file handles the layout and logic for the PreviewBlock to render
 * components.
 *
 * Config file for every component is in /src/componentPreview/ directory. File
 * names are [componentName]Preview.
 */
export const PreviewBlock = ({
  componentName,
  children,
}: {
  componentName: string;
  children: React.ReactElement;
}) => {
  const [sds, setSds] = useState<any>({});
  const { Checkbox, Select } = sds;

  // Importing SDS here because we need it async for server-side-rendering
  useEffect(() => {
    const initSds = async () => {
      setSds(await import("@stellar/design-system"));
    };
    initSds();
  }, []);

  const [theme, setTheme] = useState<Theme>("sds-theme-light");

  // All component previews
  const previews: { [key: string]: ComponentPreview } = {
    Button: ButtonPreview,
  };

  const compPreview = previews[componentName];

  if (!compPreview) {
    throw Error(`There is no preview for "${componentName}" component.`);
  }

  const [props, setProps] = useState({});

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = event.target;
    setProps({ ...props, [id]: value });
  };

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    customValue: any,
    clearProp: string,
  ) => {
    const { id, checked } = event.target;
    const _props = props;

    if (!checked && clearProp && props[clearProp]) {
      delete _props[clearProp];
    }

    setProps({
      ..._props,
      [id]: checked ? customValue ?? true : false,
    });
  };

  const renderOption = (option: any) => {
    if (option.type === "select") {
      return Select ? (
        <Select
          id={option.prop}
          fieldSize="sm"
          onChange={handleSelectChange}
          disabled={option.enabledByProp && !props[option.enabledByProp]}
          key={option.prop}
        >
          <>
            {option.options.map((o) => (
              <option value={o.value} key={o.value}>
                {o.label}
              </option>
            ))}
          </>
        </Select>
      ) : null;
    } else if (option.type === "checkbox") {
      return Checkbox ? (
        <Checkbox
          id={option.prop}
          fieldSize="sm"
          label={option.label}
          onChange={(e) =>
            handleCheckboxChange(e, option.customValue, option.clearProp)
          }
          disabled={option.enabledByProp && !props[option.enabledByProp]}
          key={option.prop}
        />
      ) : null;
    }

    return null;
  };

  // Default component with props
  const component = cloneElement(children, { ...props });

  return (
    <>
      <div className={`PreviewBlock ${theme}`}>
        <div className="PreviewBlock__controls">
          {Select ? (
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
          ) : null}

          {/* Component options */}
          <>{compPreview.options.map((o) => renderOption(o))}</>
        </div>

        <div className="PreviewBlock__component">{component}</div>
      </div>

      <PlaygroundEditor>{reactElementToJSXString(component)}</PlaygroundEditor>
    </>
  );
};
