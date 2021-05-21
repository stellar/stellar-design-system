import {
  Layout,
  Heading1,
  Heading2,
  TextLink,
  Heading5,
} from "@stellar/design-system";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ElementCode } from "components/ElementCode";
import { componentDetails } from "constants/componentDetails";
import {
  ComponentExample,
  ComponentProp,
  ComponentDetailsId,
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

  const { title, description, examples, props, externalProps } =
    componentDetails[params.id];

  const renderPropType = (type: string[]) => {
    const size = type.length;

    return type.map((item, index) => (
      <span key={`type-${Math.random()}`}>
        <code>{item}</code>
        {size !== index + 1 ? " | " : ""}
      </span>
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

      {examples.map((example: ComponentExample) => {
        const {
          title: exampleTitle,
          description: exampleDescription,
          component,
        } = example;

        return (
          <div className="Details__example" key={`example-${Math.random()}`}>
            {exampleTitle ? <Heading5>{exampleTitle}</Heading5> : null}
            {exampleDescription ? <p>{exampleDescription}</p> : null}

            {component.map((c) => (
              <div className="Details__example__container">
                <div className="Details__example__details">
                  <div className="Details__example__component">{c}</div>
                </div>
                <div className="Details__example__code">
                  <ElementCode element={c} />
                </div>
              </div>
            ))}
          </div>
        );
      })}

      {/* props */}
      {props.length ? (
        <>
          <Heading2>Props</Heading2>

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
              {props.map((componentProp: ComponentProp) => (
                <tr key={componentProp.prop}>
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
              {externalProps?.link ? (
                <tr>
                  <td colSpan={5}>
                    Including all valid{" "}
                    <TextLink href={externalProps.link}>
                      {externalProps.label || "attributes"}
                    </TextLink>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </>
      ) : null}
    </Layout.Inset>
  );
};
