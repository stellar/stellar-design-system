import React, { cloneElement, useEffect, useState } from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { PlaygroundEditor } from "@site/src/theme/Playground";
import "./styles.css";

// =============================================================================
// Preview imports
// =============================================================================
import { assetIconPreview } from "@site/src/componentPreview/assetIconPreview";
import { avatarPreview } from "@site/src/componentPreview/avatarPreview";
import { badgePreview } from "@site/src/componentPreview/badgePreview";
import { bannerPreview } from "@site/src/componentPreview/bannerPreview";
import { buttonPreview } from "@site/src/componentPreview/buttonPreview";
import { buttonPresetPreview } from "@site/src/componentPreview/buttonPresetPreview";
import { captionPreview } from "@site/src/componentPreview/captionPreview";
import { cardPreview } from "@site/src/componentPreview/cardPreview";
import { checkboxPreview } from "@site/src/componentPreview/checkboxPreview";
import { copyTextPreview } from "@site/src/componentPreview/copyTextPreview";
import { headingPreview } from "@site/src/componentPreview/headingPreview";
import { iconButtonPreview } from "@site/src/componentPreview/iconButtonPreview";
import { inputPreview } from "@site/src/componentPreview/inputPreview";
import { layoutPreview } from "@site/src/componentPreview/layoutPreview";
import { linkPreview } from "@site/src/componentPreview/linkPreview";
import { loaderPreview } from "@site/src/componentPreview/loaderPreview";
import { modalPreview } from "@site/src/componentPreview/modalPreview";
import { navButtonPreview } from "@site/src/componentPreview/navButtonPreview";
import { notificationPreview } from "@site/src/componentPreview/notificationPreview ";
import { paginationPreview } from "@site/src/componentPreview/paginationPreview";
import { paragraphPreview } from "@site/src/componentPreview/paragraphPreview";
import { profilePreview } from "@site/src/componentPreview/profilePreview";
import { projectLogoPreview } from "@site/src/componentPreview/projectLogoPreview";
import { radioButtonPreview } from "@site/src/componentPreview/radioButtonPreview";
import { selectPreview } from "@site/src/componentPreview/selectPreview";
import { tablePreview } from "@site/src/componentPreview/tablePreview";
import { textareaPreview } from "@site/src/componentPreview/textareaPreview";
import { titlePreview } from "@site/src/componentPreview/titlePreview";
import { togglePreview } from "@site/src/componentPreview/togglePreview";
import { tooltipPreview } from "@site/src/componentPreview/tooltipPreview";

// =============================================================================
// Component previews
// =============================================================================
const previews: { [key: string]: ComponentPreview } = {
  AssetIcon: assetIconPreview,
  Avatar: avatarPreview,
  Badge: badgePreview,
  Banner: bannerPreview,
  Button: buttonPreview,
  ButtonPreset: buttonPresetPreview,
  Caption: captionPreview,
  Card: cardPreview,
  Checkbox: checkboxPreview,
  Content: layoutPreview,
  CopyText: copyTextPreview,
  Footer: layoutPreview,
  Heading: headingPreview,
  Header: layoutPreview,
  IconButton: iconButtonPreview,
  Input: inputPreview,
  Inset: layoutPreview,
  Layout: layoutPreview,
  Link: linkPreview,
  Loader: loaderPreview,
  Modal: modalPreview,
  NavButton: navButtonPreview,
  Notification: notificationPreview,
  Pagination: paginationPreview,
  Paragraph: paragraphPreview,
  Profile: profilePreview,
  ProjectLogo: projectLogoPreview,
  RadioButton: radioButtonPreview,
  Select: selectPreview,
  Table: tablePreview,
  Textarea: textareaPreview,
  Title: titlePreview,
  Toggle: togglePreview,
  Tooltip: tooltipPreview,
};

type Theme = "sds-theme-light" | "sds-theme-dark";

// Types
export type PreviewOptionType = "select" | "checkbox";

interface PreviewOptionBase {
  type: PreviewOptionType;
  prop: string;
  clearProp?: string;
  customValue?: any;
}

interface PreviewOptionSelect extends PreviewOptionBase {
  options: {
    value: string;
    label: string;
  }[];
}

interface PreviewOptionCheckbox extends PreviewOptionBase {
  label: string;
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
  const { Checkbox, Select, Notification, Button, Modal } = sds;

  // Importing SDS here because we need it async for server-side-rendering
  useEffect(() => {
    const initSds = async () => {
      setSds(await import("@stellar/design-system"));
    };
    initSds();
  }, []);

  const [theme, setTheme] = useState<Theme>("sds-theme-light");

  const compPreview = previews[componentName];

  if (!compPreview) {
    throw Error(`There is no preview for "${componentName}" component.`);
  }

  const [props, setProps] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    customValue: any,
    clearProp: string,
  ) => {
    const { id, value } = event.target;
    const _props = props;

    let valObj = {};

    // If the value is object, assuming it's setting another prop. For example,
    // icon dropdown is setting icon and icon position
    try {
      valObj = JSON.parse(value);
    } catch (error) {
      // do nothing
    }

    if (value) {
      setProps({ ..._props, [id]: customValue ?? value, ...valObj });
    } else {
      delete _props[id];

      if (clearProp) {
        delete _props[clearProp];
      }

      setProps({ ..._props });
    }
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

  const renderSelect = (option: PreviewOptionSelect) => {
    return Select ? (
      <Select
        id={option.prop}
        fieldSize="sm"
        onChange={(e) =>
          handleSelectChange(e, option.customValue, option.clearProp)
        }
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
  };

  const renderCheckbox = (option: PreviewOptionCheckbox) => {
    return Checkbox ? (
      <Checkbox
        id={option.prop}
        fieldSize="sm"
        label={option.label}
        onChange={(e) =>
          handleCheckboxChange(e, option.customValue, option.clearProp)
        }
        key={option.prop}
      />
    ) : null;
  };

  // Default component with props
  const component = cloneElement(children, { ...props });

  const options = compPreview.options.reduce(
    (res, cur) => {
      if (cur.type === "checkbox") {
        res.checkbox.push(cur);
      }

      if (cur.type === "select") {
        res.select.push(cur);
      }

      return res;
    },
    { checkbox: [], select: [] },
  );

  const renderPreview = () => {
    // Need to handle Notification manually because of name collision that
    // breaks rendering
    if (componentName === "Notification") {
      return Notification ? (
        <Notification title="Notification title" variant="primary" {...props} />
      ) : null;
    }

    // Need to handle Modal manually because of button on click trigger to show
    // or hide
    if (componentName === "Modal") {
      return Button && Modal ? (
        <div className="PreviewBlock__block">
          <Button
            variant="primary"
            size="md"
            onClick={() => setIsBasicModalOpen(true)}
          >
            Open basic modal
          </Button>

          <Button
            variant="primary"
            size="md"
            onClick={() => setIsModalOpen(true)}
          >
            Open modal
          </Button>

          <Modal
            onClose={() => setIsBasicModalOpen(false)}
            parentId="preview-block"
            visible={isBasicModalOpen}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              eius beatae sint dolorem, excepturi quos enim, et ullam suscipit
              voluptates voluptas accusantium repellendus amet explicabo, iure
              veritatis aperiam alias molestiae.
            </p>
          </Modal>

          <Modal
            onClose={() => setIsModalOpen(false)}
            parentId="preview-block"
            visible={isModalOpen}
          >
            <Modal.Heading>Modal heading</Modal.Heading>
            <Modal.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius beatae sint dolorem, excepturi quos enim, et ullam
                suscipit voluptates voluptas accusantium repellendus amet
                explicabo, iure veritatis aperiam alias molestiae.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius beatae sint dolorem, excepturi quos enim, et ullam
                suscipit voluptates voluptas accusantium repellendus amet
                explicabo, iure veritatis aperiam alias molestiae.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur eius beatae sint dolorem, excepturi quos enim, et ullam
                suscipit voluptates voluptas accusantium repellendus amet
                explicabo, iure veritatis aperiam alias molestiae.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button size="sm" variant="primary">
                Submit
              </Button>
              <Button size="sm" variant="secondary">
                Cancel
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : null;
    }

    return component;
  };

  return (
    <>
      <div id="preview-block" className={`PreviewBlock ${theme}`}>
        <div className="PreviewBlock__selects">
          <div className="PreviewBlock__selects__content">
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

            {options.select.map((o) => renderSelect(o))}
          </div>
        </div>

        <div className="PreviewBlock__component">{renderPreview()}</div>

        {options.checkbox.length > 0 ? (
          <div className="PreviewBlock__checkboxes">
            <div className="PreviewBlock__checkboxes__content">
              {options.checkbox.map((o) => renderCheckbox(o))}
            </div>
          </div>
        ) : null}
      </div>

      <PlaygroundEditor>{reactElementToJSXString(component)}</PlaygroundEditor>
    </>
  );
};
