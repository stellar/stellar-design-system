import React from "react";
import SdsDocs from "@stellar/design-system/docs/components.json";
import { Element } from "@site/src/components/Element";
import { ParseSummary } from "@site/src/components/ParseSummary";
import { ElementPropType } from "@site/src/components/ElementPropType";

export const ComponentProps = ({
  componentName,
}: {
  componentName: string;
}) => {
  const component = SdsDocs?.children?.find(
    (c) => c.name === `${componentName}Props` && c.variant === "declaration",
  );

  if (!component) {
    throw Error(`Component "${componentName}" props not found.`);
  }

  const props = component.children.map((p) => {
    const defaultVal = p.comment?.blockTags?.[0]?.content?.[0];

    return (
      <tr key={p.id}>
        <td>
          <code>{p.name}</code>
        </td>
        <td>
          <ElementPropType type={p.type} />
        </td>
        <td>
          {defaultVal ? (
            <Element text={defaultVal.text} kind={defaultVal.kind} />
          ) : null}
        </td>
        <td>{p?.flags?.isOptional ? "Yes" : ""}</td>
        <td>
          <ParseSummary summary={p.comment?.summary} />
        </td>
      </tr>
    );
  });

  return (
    <div>
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
        <tbody>{props}</tbody>
      </table>
      <p>
        <ParseSummary summary={component.comment?.summary} />
      </p>
    </div>
  );
};
