import React from "react";
import SdsDocs from "@stellar/design-system/docs/components.json";
import { Element } from "@site/src/components/Element";

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

  // TODO: reusable component
  // TODO: split paragraphs /n/n
  const description = component.comment.summary.map((s) => (
    <Element text={s.text} kind={s.kind} key={s.id} />
  ));

  const props = component.children.map((p) => {
    // TODO: handle this properly
    const defaultVal = p.comment?.blockTags?.[0]?.content?.[0];

    return (
      <tr key={p.id}>
        <td>
          <code>{p.name}</code>
        </td>
        <td>
          <PropType type={p.type} />
        </td>
        <td>
          {defaultVal ? (
            <Element text={defaultVal.text} kind={defaultVal.kind} />
          ) : null}
        </td>
        <td>{p?.flags?.isOptional ? "Yes" : ""}</td>
        {/* TODO: render summary properly */}
        <td>{p.comment.summary[0].text}</td>
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
      <p>{description}</p>
    </div>
  );
};

// TODO: move to its own file
// TODO: might be combined with Element?
const PropType = ({ type }: { type: any }) => {
  // TODO: handle all types
  switch (type.type) {
    case "union":
      return type.types.map((t) => (
        <>
          <code>{t.value}</code>{" "}
        </>
      ));
    default:
      // reference
      return <code>{type.name || ""}</code>;
  }
};
