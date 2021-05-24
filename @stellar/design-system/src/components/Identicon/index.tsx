import React from "react";
import createStellarIdenticon from "stellar-identicon-js";
import "./styles.scss";

interface IdenticonProps {
  publicAddress: string;
  size?: string;
  shortenAddress?: boolean;
  federatedAddress?: string;
}

export const Identicon: React.FC<IdenticonProps> = ({
  publicAddress,
  size,
  shortenAddress,
  federatedAddress,
}: IdenticonProps) => {
  if (!publicAddress) {
    return null;
  }

  const identiconCanvas = publicAddress
    ? createStellarIdenticon(publicAddress)
    : null;

  if (!identiconCanvas) {
    return null;
  }

  const customStyle = {
    ...(size ? { "--Identicon-size": size } : {}),
  } as React.CSSProperties;

  const address = federatedAddress ?? publicAddress;

  return (
    <div className="Identicon" style={customStyle} title={address}>
      <div className="Identicon__icon">
        <img
          src={identiconCanvas.toDataURL()}
          alt="Stellar address identicon"
        />
      </div>

      <div className="Identicon__address">
        {shortenAddress ? shortenStellarAddress(address) : address}
      </div>
    </div>
  );
};

const shortenStellarAddress = (key: string) => {
  if (!key) {
    return "";
  }

  const isValidFederatedAddress = key.split("*").length > 1;

  if (isValidFederatedAddress) {
    return `${key.split("*")[0]}*${key.split("*")[1].slice(0, 3)}…`;
  }

  return `${key.slice(0, 5)}…${key.slice(-5)}`;
};

Identicon.displayName = "Identicon";
