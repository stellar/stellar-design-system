import {
  Layout,
  Heading1,
  Heading2,
  TextLink,
  Heading3,
  Heading4,
} from "@stellar/design-system";
import React from "react";
import { ElementCode } from "components/ElementCode";
import { componentDetails } from "constants/componentDetails";
import {
  ComponentExample,
  ComponentProp,
  ComponentDetailsId,
  ComponentExternalProps,
} from "types/types.d";

import "./styles.scss";

export const Details = ({
  componentId,
}: {
  componentId: ComponentDetailsId;
}) => {
  if (!componentId) {
    return (
      <Layout.Inset>
        <p>
          Component <code>{componentId}</code> does not exist
        </p>
      </Layout.Inset>
    );
  }

  const {
    title,
    description,
    examples,
    props,
    externalProps,
    notes,
    subComponents,
  } = componentDetails[componentId];

  const renderPropType = (type: string[]) => {
    const size = type.length;

    return type.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <span key={`type-${index}`}>
        <code>{item}</code>
        {size !== index + 1 ? " | " : ""}
      </span>
    ));
  };

  const renderPropsTable = (
    renderProps: ComponentProp[],
    renderExternalProps?: ComponentExternalProps,
  ) => (
    <>
      <div className="TableContainer">
        <table className="Table">
          <thead>
            <tr>
              <th>Prop</th>
              <th>Type</th>
              <th>Default</th>
              <th>Optional</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {renderProps.map((componentProp, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <tr key={`${componentProp.prop}-${index}`}>
                <td>
                  <code>{componentProp.prop}</code>
                </td>
                <td>{renderPropType(componentProp.type)}</td>
                <td>
                  {componentProp.default ? (
                    <code>{componentProp.default}</code>
                  ) : null}
                </td>
                <td>{componentProp.optional ? "Yes" : null}</td>
                <td>{componentProp.description ?? null}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {renderExternalProps?.link ? (
        <div className="TableNoteContainer">
          Including all valid{" "}
          <TextLink href={renderExternalProps.link}>
            {renderExternalProps.label || "attributes"}
          </TextLink>
        </div>
      ) : null}
    </>
  );

  const renderExample = (
    components: React.ReactNode[],
    options?: {
      previewExampleOverride?: React.Component[];
      useGridLayout?: boolean;
    },
  ) => {
    const { previewExampleOverride, useGridLayout } = options || {};

    if (useGridLayout) {
      return (
        <div className="Details__example__grid">
          {components.map((component, index) => (
            <div
              className="Details__example__container"
              // eslint-disable-next-line react/no-array-index-key
              key={`grid-container-${index}`}
            >
              <div className="Details__example__details">
                <div className="Details__example__component">
                  {previewExampleOverride?.[index]
                    ? previewExampleOverride[index]
                    : component}
                </div>
              </div>
              <div className="Details__example__code">
                <ElementCode element={component} id={index} />
              </div>
            </div>
          ))}
        </div>
      );
    }

    return components.map((component, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="Details__example__container" key={`container-${index}`}>
        <div className="Details__example__details">
          <div className="Details__example__component">
            {previewExampleOverride?.[index]
              ? previewExampleOverride[index]
              : component}
          </div>
        </div>
        <div className="Details__example__code">
          <ElementCode element={component} id={index} />
        </div>
      </div>
    ));
  };

  return (
    <Layout.Inset>
      {/* heading */}
      <Heading1>{title}</Heading1>

      {/* description */}
      <p>{description}</p>

      {/* examples */}
      <Heading2>Examples</Heading2>

      {examples.map((example: ComponentExample, index) => {
        const {
          title: exampleTitle,
          description: exampleDescription,
          component,
          previewExampleOverride,
          useGridLayout,
        } = example;

        return (
          // eslint-disable-next-line react/no-array-index-key
          <div className="Section Details__example" key={`example-${index}`}>
            {exampleTitle ? <Heading3>{exampleTitle}</Heading3> : null}
            {exampleDescription ? <p>{exampleDescription}</p> : null}

            {renderExample(component, {
              previewExampleOverride,
              useGridLayout,
            })}
          </div>
        );
      })}

      {/* props */}
      {props.length ? (
        <div className="Section">
          <Heading2>Props</Heading2>
          {renderPropsTable(props, externalProps)}
        </div>
      ) : null}

      {/* sub-components */}
      {subComponents?.components.length ? (
        <div className="Section">
          <Heading2>Sub-components</Heading2>

          <p>{subComponents.description}</p>

          {subComponents.components.map((sub, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="Section" key={`subcomponent-${index}`}>
              <Heading4>{sub.component}</Heading4>

              <p>{sub.description}</p>

              {renderPropsTable(sub.props)}
            </div>
          ))}
        </div>
      ) : null}

      {/* notes */}
      {notes?.length ? (
        <div className="Section">
          <Heading2>Notes</Heading2>

          {notes.map((note: React.ReactNode, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`note-${index}`}>{note}</React.Fragment>
          ))}
        </div>
      ) : null}
    </Layout.Inset>
  );
};
