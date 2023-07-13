import React from "react";
import SdsDocs from "@stellar/design-system/docs/components.json";
import { Element } from "@site/src/components/Element";

export const ComponentDescription = ({
  componentName,
}: {
  componentName: string;
}) => {
  const component = SdsDocs.children.find(
    (c) => c.name === componentName && c.variant === "declaration",
  );

  if (!component) {
    throw Error(`Component "${componentName}" description not found.`);
  }

  // TODO: split paragraphs /n/n
  const description = component.comment.summary.map((s) => (
    <Element text={s.text} kind={s.kind} />
  ));

  return <p>{description}</p>;
};
