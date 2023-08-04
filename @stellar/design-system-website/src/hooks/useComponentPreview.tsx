import React, { useState } from "react";
import { Checkbox, Select } from "@stellar/design-system";

// Previews
import { ButtonPreview } from "@site/src/componentPreview/ButtonPreview";

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
  defaultComponent: React.JSX.Element;
  options: (PreviewOptionSelect | PreviewOptionCheckbox)[];
};

/**
 * This hook has all component previews listed in "previews" param.
 *
 * Config file for every component is in /src/componentPreview directory. File
 * names are [componentName]Preview.
 */
export const useComponentPreview = (componentName: string) => {
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
      return (
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
      );
    } else if (option.type === "checkbox") {
      return (
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
      );
    }

    return null;
  };

  return {
    defaultComponent: compPreview.defaultComponent,
    props,
    options: <>{compPreview.options.map((o) => renderOption(o))}</>,
  };
};
