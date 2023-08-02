import React from "react";
import { Element } from "@site/src/components/Element";

export const ParseSummary = ({ summary }: { summary: any }) => {
  return (
    <>
      {summary.map((s, i) => (
        <Element text={s.text} kind={s.kind} key={i} tag={s.tag} />
      ))}
    </>
  );
};
