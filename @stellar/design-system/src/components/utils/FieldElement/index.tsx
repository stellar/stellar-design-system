import React from "react";
import "./styles.scss";

enum FieldElementPosition {
  left = "left",
  right = "right",
}

interface FieldElementComponent {
  position: typeof FieldElementPosition;
}

interface FieldElementProps {
  position: FieldElementPosition;
  children: React.ReactNode;
}

export const FieldElement = ({
  position,
  children,
}: FieldElementProps & FieldElementComponent): JSX.Element => (
  <span className={`FieldElement FieldElement--${position}`}>{children}</span>
);

FieldElement.position = FieldElementPosition;
