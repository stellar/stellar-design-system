import React from "react";
import "./styles.scss";

interface FieldNoteProps {
  variant?: "note" | "error";
  children: string | React.ReactNode;
}

export const FieldNote: React.FC<FieldNoteProps> = ({
  variant = "note",
  children,
}: FieldNoteProps) => (
  <div className={`FieldNote FieldNote--${variant}`}>{children}</div>
);
