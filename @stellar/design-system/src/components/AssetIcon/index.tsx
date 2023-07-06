import "./styles.scss";

type AssetIconSource = {
  image: string;
  altText: string;
  imageSize?: string;
  backgroundColor?: string;
};

type AssetIconProps = {
  source: AssetIconSource[];
  borderColor?: string;
};

export const AssetIcon: React.FC<AssetIconProps> = ({
  source,
  borderColor,
}: AssetIconProps) => {
  const customAssetIconStyle = {
    ...(borderColor ? { "--AssetIcon-color-border": borderColor } : {}),
  } as React.CSSProperties;

  return (
    <div className="AssetIcon" style={customAssetIconStyle}>
      {source.map(({ image, altText, imageSize, backgroundColor }) => {
        const customSourceStyle = {
          ...(backgroundColor
            ? { "--AssetIcon-color-image-background": backgroundColor }
            : {}),
          ...(imageSize ? { "--AssetIcon-image-size": imageSize } : {}),
        } as React.CSSProperties;

        return (
          <div
            className="AssetIcon__image"
            style={customSourceStyle}
            key={altText}
          >
            <img src={image} alt={altText} />
          </div>
        );
      })}
    </div>
  );
};

AssetIcon.displayName = "AssetIcon";
