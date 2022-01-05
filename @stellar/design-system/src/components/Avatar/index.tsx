import React from "react";
import "./styles.scss";

interface AvatarSource {
  image: string | React.ReactNode | undefined;
  altText: string;
  backgroundColor?: string;
  iconColor?: string;
  isFullSizeImage?: boolean;
}

interface AvatarProps {
  source: AvatarSource[];
  size?: string;
  borderColor?: string;
}

export const Avatar = ({ source, size, borderColor }: AvatarProps) => {
  const renderImage = (item: AvatarSource) => {
    if (typeof item.image === "string") {
      return <img alt={item.altText} src={item.image} />;
    }

    return (
      <span className="Avatar__item__icon" title={item.altText}>
        {item.image}
      </span>
    );
  };

  return (
    <div className="Avatar">
      {source.map((item) => {
        const customStyle = {
          ...(borderColor ? { "--Avatar-border-color": borderColor } : {}),
          ...(size ? { "--Avatar-size": size } : {}),
          ...(item.backgroundColor
            ? { "--Avatar-background-color": item.backgroundColor }
            : {}),
          ...(item.iconColor ? { "--Avatar-icon-color": item.iconColor } : {}),
          ...(item.isFullSizeImage ? { "--Avatar-image-size": "100%" } : {}),
        } as React.CSSProperties;

        return (
          <div key={item.altText} className="Avatar__item" style={customStyle}>
            {item.image ? (
              renderImage(item)
            ) : (
              <div className="Avatar__item__bullet" />
            )}
          </div>
        );
      })}
    </div>
  );
};

Avatar.displayName = "Avatar";
