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
      // TODO: we currently have only this type for functions, but it would be
      // nice to parse it properly
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
