import { createStellarIdenticon } from "../../helpers/createStellarIdenticon";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export type AvatarBaseProps = {
  /** Avatar size */
  size: "sm" | "md" | "lg";
};

/** */
export type AvatarStellarAddressProps = {
  /** Public Stellar address */
  publicAddress: string;
  userName?: undefined;
};

/** */
export type AvatarUserNameProps = {
  /** User name for initials */
  userName: string;
  publicAddress?: undefined;
};

/** */
export type AvatarProps = (
  | AvatarStellarAddressProps
  | AvatarUserNameProps
  | {
      userName?: undefined;
      publicAddress?: undefined;
    }
) &
  AvatarBaseProps;

/**
 * A unique identicon of a public Stellar address, user initials (max two), or a default user icon. [We’re using stellar-identicon-js](https://github.com/Lobstrco/stellar-identicon-js).
 */
export const Avatar: React.FC<AvatarProps> = ({
  size,
  publicAddress,
  userName,
}: AvatarProps) => {
  const getInitials = (userName: string) => {
    const arr = userName.split(" ");

    if (arr.length >= 2) {
      return `${arr[0].charAt(0)}${arr[1].charAt(0)}`;
    }

    return userName.charAt(0);
  };

  const renderIcon = () => {
    if (publicAddress) {
      return (
        <img
          src={createStellarIdenticon(publicAddress).toDataURL()}
          alt="Stellar address identicon"
        />
      );
    }

    if (userName) {
      return <div className="Avatar__initials">{getInitials(userName)}</div>;
    }

    return <Icon.User01 />;
  };

  return <div className={`Avatar Avatar--${size}`}>{renderIcon()}</div>;
};

Avatar.displayName = "Avatar";
