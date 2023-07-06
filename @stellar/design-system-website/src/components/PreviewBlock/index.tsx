import React from "react";

export const PreviewBlock = ({ children }: { children: React.ReactNode }) => {
  // TODO: theme switch
  return <div className="sds-theme-light">{children}</div>;
};
