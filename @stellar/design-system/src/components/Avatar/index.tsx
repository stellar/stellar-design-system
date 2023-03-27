import createStellarIdenticon from "stellar-identicon-js";
import "./styles.scss";

type AvatarProps = {
  publicAddress: string;
  federatedAddress?: string;
  showAddress?: boolean;
  isShort?: boolean;
};

export const Avatar: React.FC<AvatarProps> = ({
  publicAddress,
  federatedAddress,
  showAddress,
  isShort,
}: AvatarProps) => {
  const address = federatedAddress ?? publicAddress;

  return (
    <div className="Avatar">
      <div className="Avatar__icon">
        <img
          src={createStellarIdenticon(publicAddress).toDataURL()}
          alt="Stellar address identicon"
        />
      </div>

      {showAddress ? (
        <div className="Avatar__address" title={address}>
          {isShort ? shortenAddress(address) : address}
        </div>
      ) : null}
    </div>
  );
};

const shortenAddress = (address: string) => {
  if (!address) {
    return "";
  }

  const isValidFederatedAddress = address.split("*").length > 1;

  if (isValidFederatedAddress) {
    return `${address.split("*")[0]}*${address.split("*")[1].slice(0, 3)}…`;
  }

  return `${address.slice(0, 5)}…${address.slice(-5)}`;
};

Avatar.displayName = "Avatar";
