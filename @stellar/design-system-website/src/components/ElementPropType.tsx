import React, { Fragment } from "react";

export const ElementPropType = ({ type }: { type: any }) => {
  switch (type.type) {
    case "union":
      return type.types.map((t, i) => (
        <Fragment key={i}>
          <code>{t.value}</code>{" "}
        </Fragment>
      ));
    case "intrinsic":
    case "reference":
      return <code>{type.name}</code>;
    default:
      return "";
  }
};
