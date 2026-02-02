import React from "react";
import "./styles.scss";

interface FieldNoteProps {
  variant?: "note" | "error" | "success";
  size: "sm" | "md" | "lg";
  children: string | React.ReactNode;
}

export const FieldNote = ({
  variant = "note",
  size,
  children,
}: FieldNoteProps): React.ReactElement => (
  <div className={`FieldNote FieldNote--${variant} FieldNote--${size}`}>
    {children}
  </div>
);
