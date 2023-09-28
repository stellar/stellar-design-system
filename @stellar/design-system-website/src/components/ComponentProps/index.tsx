import React, { Fragment } from "react";
import SdsDocs from "@stellar/design-system/docs/components.json";
import { Element } from "@site/src/components/Element";
import { ParseSummary } from "@site/src/components/ParseSummary";
import { ElementPropType } from "@site/src/components/ElementPropType";

export const ComponentProps = ({
  componentName,
  relatedType,
}: {
  componentName: string;
  // To associate a custom types that are used in the component. For example,
  // AssetIconSource in AssetIcon.
  relatedType?: string[];
}) => {
  const component = SdsDocs?.children?.find(
    (c) => c.name === `${componentName}Props` && c.variant === "declaration",
  );

  if (!component) {
    throw Error(`Component "${componentName}" props not found.`);
  }

  const relatedTypes = relatedType?.map((t) =>
    SdsDocs?.children?.find((c) => c.name === t && c.variant === "declaration"),
  );

  const PropRow = ({ p }: { p: any }) => {
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
          <ParseSummary
            summary={
              p?.type?.declaration?.signatures?.[0]?.comment?.summary ||
              p.comment?.summary
            }
          />
        </td>
      </tr>
    );
  };

  const props = component.children.map((p) => <PropRow p={p} />);

  const relatedTypeProps = relatedTypes?.map((t) => {
    return (
      <Fragment key={`t-${t.id}`}>
        <tr>
          <td colSpan={5}>
            <code>{t.name}</code>
          </td>
        </tr>
        {t?.type?.declaration?.children?.map((t) => (
          <PropRow p={t} />
        ))}
      </Fragment>
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
        <tbody>
          {props}
          {relatedTypeProps}
        </tbody>
      </table>

      {component.comment?.summary ? (
        <p>
          <ParseSummary summary={component.comment.summary} />
        </p>
      ) : null}
    </div>
  );
};
