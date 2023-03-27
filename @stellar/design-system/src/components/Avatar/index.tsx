import createStellarIdenticon from "stellar-identicon-js";
import "./styles.scss";

type AvatarProps = {
  publicAddress: string;
};

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
