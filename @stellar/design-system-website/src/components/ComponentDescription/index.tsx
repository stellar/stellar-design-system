import React from "react";
import SdsDocs from "@stellar/design-system/docs/components.json";
import { ParseSummary } from "@site/src/components/ParseSummary";

export const ComponentDescription = ({
  componentName,
}: {
  componentName: string;
}) => {
  const component = SdsDocs?.children?.find(
    (c) => c.name === componentName && c.variant === "declaration",
  );

  if (!component) {
    throw Error(`Component "${componentName}" description not found.`);
  }

  return (
    <p>
      <ParseSummary
        summary={
          ((component.signatures?.[0] || component) as any)?.comment?.summary
        }
      />
    </p>
  );
};
