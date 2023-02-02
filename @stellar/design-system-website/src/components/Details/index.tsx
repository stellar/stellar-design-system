import { Heading, TextLink, Title } from "@stellar/design-system";
import React from "react";
import { ElementCode } from "components/ElementCode";
import { componentDetails } from "constants/componentDetails";
import {
  ComponentExample,
  ComponentProp,
  ComponentDetailsId,
  ComponentExternalProps,
} from "types/types";

import "./styles.scss";

export const Details = ({
  componentId,
}: {
  componentId: ComponentDetailsId;
}) => {
  if (!componentId || !componentDetails[componentId]) {
    return (
      <p>
        Component <code>{componentId}</code> does not exist.
      </p>
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

  const renderPropType = (type: string[]) =>
    type.map((item, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <code key={`type-${index}`}>{item}</code>
    ));

  const renderPropsTable = (
    renderProps: ComponentProp[],
    renderExternalProps?: ComponentExternalProps,
  ) => (
    <>
      <div className="DetailsTableContainer">
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
            {renderProps.map((componentProp, index) => {
              if (componentProp.heading) {
                return (
                  <tr>
                    <td colSpan={5}>
                      <Title size="md">{componentProp.heading}</Title>
                    </td>
                  </tr>
                );
              }

              return (
                // eslint-disable-next-line react/no-array-index-key
                <tr key={`${componentProp.prop}-${index}`}>
                  <td>
                    <code>{componentProp.prop}</code>
                  </td>
                  <td className="Table__props">
                    {renderPropType(componentProp.type)}
                  </td>
                  <td>
                    {componentProp.default ? (
                      <code>{componentProp.default}</code>
                    ) : null}
                  </td>
                  <td>{componentProp.optional ? "Yes" : null}</td>
                  <td>{componentProp.description ?? null}</td>
                </tr>
              );
            })}
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
      previewExampleOverride?: React.ReactNode[];
      useGridLayout?: boolean;
    },
  ) => {
    const { previewExampleOverride, useGridLayout } = options || {};

    if (useGridLayout) {
      return (
        <div className="Details__grid">
          {components.map((component, index) => (
            <div
              className="Details__grid__container"
              // eslint-disable-next-line react/no-array-index-key
              key={`grid-container-${index}`}
            >
              <div className="Details__grid__icon">
                {previewExampleOverride?.[index]
                  ? previewExampleOverride[index]
                  : component}
              </div>
              <div className="Details__grid__title">
                <ElementCode element={component} id={index} displayNameOnly />
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
    <>
      {/* heading */}
      <div className="Section">
        <Heading as="h1" size="md">
          {title}
        </Heading>

        {/* description */}
        <p>{description}</p>
      </div>

      {/* examples */}
      <div className="Section">
        <Heading as="h2" size="md">
          Examples
        </Heading>

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
              {exampleTitle ? (
                <Heading as="h4" size="md">
                  {exampleTitle}
                </Heading>
              ) : null}
              {exampleDescription ? <p>{exampleDescription}</p> : null}

              {renderExample(component, {
                previewExampleOverride,
                useGridLayout,
              })}
            </div>
          );
        })}
      </div>

      {/* props */}
      {props.length ? (
        <div className="Section">
          <Heading as="h2" size="md">
            Props
          </Heading>
          {renderPropsTable(props, externalProps)}
        </div>
      ) : null}

      {/* sub-components */}
      {subComponents?.components.length ? (
        <div className="Section">
          <Heading as="h2" size="md">
            Sub-components
          </Heading>

          <p>{subComponents.description}</p>

          {subComponents.components.map((sub, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="Section" key={`subcomponent-${index}`}>
              <Heading as="h4" size="md">
                {sub.component}
              </Heading>

              <p>{sub.description}</p>

              {renderPropsTable(sub.props)}

              {sub.notes ? (
                <div className="SubSection">
                  <Heading as="h5" size="md">
                    Notes
                  </Heading>

                  {sub.notes.map((note, idx) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <React.Fragment key={`subnote-${idx}`}>
                      {note}
                    </React.Fragment>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : null}

      {/* notes */}
      {notes?.length ? (
        <div className="Section">
          <Heading as="h2" size="md">
            Notes
          </Heading>

          {notes.map((note: React.ReactNode, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`note-${index}`}>{note}</React.Fragment>
          ))}
        </div>
      ) : null}
    </>
  );
};
