import React from "react";
import "./styles.scss";

enum FieldNoteVariant {
  default = "default",
  error = "error",
}

interface FieldNoteComponent {
  variant: typeof FieldNoteVariant;
}

interface FieldNoteProps {
  variant?: FieldNoteVariant;
  children: string | React.ReactNode;
}

export const FieldNote: React.FC<FieldNoteProps> & FieldNoteComponent = ({
  variant = FieldNoteVariant.default,
  children,
}: FieldNoteProps) => (
  <div className={`FieldNote FieldNote--${variant}`}>{children}</div>
);

FieldNote.variant = FieldNoteVariant;
