import React, { Fragment } from "react";

export const ElementPropType = ({ type }: { type: any }) => {
  switch (type.type) {
    case "union":
      return type.types.map((t, i) => (
        <Fragment key={i}>
          <code>{t.value}</code>{" "}
        </Fragment>
      ));
    case "reflection":
      // TODO: improve parsing functions. This approach is very specific for a
      // few cases we have.
      if (type.declaration?.children?.length > 0) {
        const props = type.declaration?.children
          .map(
            (c) =>
              `${c.name}: ${
                c.type.type === "intrinsic" ? c.type.name : "() => void"
              }`,
          )
          .join("; ");
        return <code>{`{ ${props} }`}</code>;
      }

      if (type.declaration?.signatures?.[0]?.parameters?.length > 0) {
        const params = type.declaration?.signatures?.[0]?.parameters
          .map((p) => `${p.name}: ${p.type.name}`)
          .join(", ");

        return <code>{`(${params}) => void`}</code>;
      }

      return <code>{`() => void`}</code>;
    case "array":
      return <code>{`${type?.elementType?.name || ""}[]`}</code>;
    case "intrinsic":
    case "reference":
      return <code>{type.name}</code>;
    default:
      return "";
  }
};
