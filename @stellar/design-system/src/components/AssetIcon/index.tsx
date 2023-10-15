import "./styles.scss";

/** */
export type AssetIconSource = {
  /** Image URL */
  image: string;
  /** Image alt text */
  altText: string;
  /** Custom size of the image inside the circle */
  imageSize?: string;
  /** Custom background color */
  backgroundColor?: string;
};

/** */
export interface AssetIconProps {
  /** Asset source data */
  source: AssetIconSource[];
  /** Asset border color */
  borderColor?: string;
}

/**
 * An asset image displayed in a circle from a URL source. The component can accept multiple sources to show a currency pair, for example.
 */
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
