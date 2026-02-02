import React from "react";
import "./styles.scss";

/** */
export type AssetSource = {
  /** Image URL */
  image: string;
  /** Image alt text */
  altText: string;
  /** Custom background color */
  backgroundColor?: string;
};

/** */
export type AssetBaseProps = {
  /** Asset size */
  size: "sm" | "md" | "lg";
  /** First asset source */
  sourceOne: AssetSource;
};

/** */
export type SingleAssetProps = {
  /** Asset or asset pair variant */
  variant: "single";
  sourceTwo?: undefined;
};

/** */
export type MultiAssetProps = {
  /** Asset or asset pair variant */
  variant: "swap" | "pair" | "platform";
  /** Second asset source */
  sourceTwo: AssetSource;
};

/** */
export type AssetProps = (SingleAssetProps | MultiAssetProps) & AssetBaseProps;

/**
 * An asset image displayed in a circle from a URL source. The component can accept multiple sources to show a currency pair, for example.
 */
export const Asset = ({
  variant,
  size,
  sourceOne,
  sourceTwo,
}: AssetProps): React.ReactElement => {
  const additionalClasses = [`Asset--${variant}`, `Asset--${size}`].join(" ");

  const renderImage = (source: AssetSource) => {
    const customSourceStyle = {
      ...(source.backgroundColor
        ? { "--Asset-color-image-background": source.backgroundColor }
        : {}),
    } as React.CSSProperties;

    return (
      <div className="Asset__image">
        <img
          src={source.image}
          alt={source.altText}
          style={customSourceStyle}
        />
      </div>
    );
  };

  return (
    <div className={`Asset ${additionalClasses}`}>
      {renderImage(sourceOne)}
      {sourceTwo ? renderImage(sourceTwo) : null}
    </div>
  );
};

Asset.displayName = "Asset";
