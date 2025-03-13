import "./styles.scss";

/** */
export interface FrameProps {
  /** Variant of the Frame */
  variant:
    | "default"
    | "brand"
    | "success"
    | "warning"
    | "error"
    | "gold"
    | "navy"
    | "teal"
    | "mint"
    | "lime"
    | "pink";
  /** Size of the Frame */
  size: "sm" | "md" | "lg";
  /** Icon element */
  icon: React.ReactNode;
  /** Shape of the Frame container */
  shape: "round" | "square";
}

/**
 * `Frame` is used to show an icon inside a container.
 */
export const Frame: React.FC<FrameProps> = ({ variant, size, icon, shape }) => {
  const additionalClasses = [
    `Frame--${variant}`,
    `Frame--${size}`,
    `Frame--${shape}`,
  ].join(" ");

  return <div className={`Frame ${additionalClasses}`}>{icon}</div>;
};

Frame.displayName = "Frame";
