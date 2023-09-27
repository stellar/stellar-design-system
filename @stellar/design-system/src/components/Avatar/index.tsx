import { createStellarIdenticon } from "../../helpers/createStellarIdenticon";
import "./styles.scss";

/** */
export interface AvatarProps {
  /** Public Stellar address */
  publicAddress: string;
}

/**
 * Unique identicon of public Stellar address. [We’re using stellar-identicon-js](https://github.com/Lobstrco/stellar-identicon-js).
 */
export const Avatar: React.FC<AvatarProps> = ({
  publicAddress,
}: AvatarProps) => {
  return (
    <div className="Avatar">
      <img
        src={createStellarIdenticon(publicAddress).toDataURL()}
        alt="Stellar address identicon"
      />
    </div>
  );
};

Avatar.displayName = "Avatar";
