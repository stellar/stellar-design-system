import React from "react";

export type ElementKind = "text" | "code" | "inline-tag";

export const Element = ({
  text,
  kind,
}: {
  text: string;
  kind: ElementKind;
}) => {
  switch (kind) {
    case "code":
      // Remove ``
      return <code>{text.slice(1, -1)}</code>;
    case "inline-tag":
      // TODO: link to inner component
      return <a href="#">{text}</a>;
    // text is default
    default:
      // TODO: how to handle md links
      return <>{text}</>;
  }
};
