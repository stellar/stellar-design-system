import { Avatar } from "../Avatar";
import { CopyText } from "../CopyText";
import { Icon } from "../../icons";
import "./styles.scss";

/** */
export interface ProfileProps {
  /** Public Stellar address */
  publicAddress: string;
  /** Size of the component */
  size: "md" | "sm" | "xs";
  /** Federated address to show in place of Stellar address */
  federatedAddress?: string;
  /** Shorten Stellar or federated address */
  isShort?: boolean;
  /** Adding `onClick` prop will turn component into a button */
  onClick?: () => void;
  /** Adding href prop will turn component into a link */
  href?: string;
  /** Hide the avatar */
  hideAvatar?: boolean;
  /** Add copy address functionality */
  isCopy?: boolean;
}

/**
 * The `Profile` component shows an avatar with a Stellar address.
 */
export const Profile: React.FC<ProfileProps> = ({
  publicAddress,
  size,
  federatedAddress,
  isShort,
  onClick,
  href,
  hideAvatar,
  isCopy,
}: ProfileProps) => {
  const address = federatedAddress ?? publicAddress;
  const additionalClasses = [
    `Profile--${size}`,
    ...(onClick ? [`Profile--button`] : []),
    ...(href ? [`Profile--link`] : []),
    ...(isCopy ? [`Profile--copy`] : []),
  ].join(" ");

  const Component = ({ ...props }) => {
    const isExternalLink = href?.startsWith("http") || href?.startsWith("//");

    const componentProps = {
      ...props,
      ...(isExternalLink
        ? { rel: "noreferrer noopener", target: "_blank" }
        : {}),
      className: `Profile ${additionalClasses}`,
    };

    if (onClick) {
      return <button {...componentProps} onClick={onClick} />;
    } else if (href) {
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      return <a {...componentProps} href={href} />;
    }

    if (isCopy) {
      return (
        <CopyText textToCopy={address} doneLabel="Copied address">
          <div {...componentProps}>
            {props.children}{" "}
            <div className="Profile--copy__icon">
              <Icon.Copy01 />
            </div>
          </div>
        </CopyText>
      );
    }

    return <div {...componentProps} />;
  };

  return (
    <Component>
      {hideAvatar ? null : <Avatar size="sm" publicAddress={publicAddress} />}

      <div className="Profile__address" title={address}>
        {isShort ? shortenAddress(address) : address}
      </div>
    </Component>
  );
};

const shortenAddress = (address: string) => {
  if (!address) {
    return "";
  }

  const isValidFederatedAddress = address.split("*").length > 1;

  if (isValidFederatedAddress) {
    return `${address.slice(0, 10)}…`;
  }

  return `${address.slice(0, 5)}…${address.slice(-5)}`;
};

Profile.displayName = "Profile";
