import {
  Layout,
  Heading1,
  Heading2,
  TextLink,
  Heading5,
  Heading4,
} from "@stellar/design-system";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ElementCode } from "components/ElementCode";
import { componentDetails } from "constants/componentDetails";
import {
  ComponentExample,
  ComponentProp,
  ComponentDetailsId,
  ComponentExternalProps,
} from "types/types.d";

import "./styles.scss";

interface paramProps {
  id: ComponentDetailsId;
}

export const Details = () => {
  const params: paramProps = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  if (!componentDetails[params.id]) {
    return (
      <Layout.Inset>
        <p>
          Component <code>{params.id}</code> does not exist
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
  } = componentDetails[params.id];

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
    <table>
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
        {renderExternalProps?.link ? (
          <tr>
            <td colSpan={5}>
              Including all valid{" "}
              <TextLink href={renderExternalProps.link}>
                {renderExternalProps.label || "attributes"}
              </TextLink>
            </td>
          </tr>
        ) : null}
      </tbody>
    </table>
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
      {description}

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
          <div className="Details__example" key={`example-${index}`}>
            {exampleTitle ? <Heading5>{exampleTitle}</Heading5> : null}
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
        <>
          <Heading2>Props</Heading2>
          {renderPropsTable(props, externalProps)}
        </>
      ) : null}

      {/* sub-components */}
      {subComponents?.components.length ? (
        <>
          <Heading2>Sub-components</Heading2>

          <p>{subComponents.description}</p>

          {subComponents.components.map((sub, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`subcomponent-${index}`}>
              <Heading4>{sub.component}</Heading4>

              <p>{sub.description}</p>

              {renderPropsTable(sub.props)}
            </React.Fragment>
          ))}
        </>
      ) : null}

      {/* notes */}
      {notes?.length ? (
        <>
          <Heading2>Notes</Heading2>

          {notes.map((note: React.ReactNode, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <React.Fragment key={`note-${index}`}>{note}</React.Fragment>
          ))}
        </>
      ) : null}
    </Layout.Inset>
  );
};
