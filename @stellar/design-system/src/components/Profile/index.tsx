import { Avatar } from "../Avatar";
import { CopyText } from "../CopyText";
import { Icon } from "../../icons";
import "./styles.scss";

// TODO: add copy functionality

type ProfileProps = {
  publicAddress: string;
  size: "md" | "sm" | "xs";
  federatedAddress?: string;
  isShort?: boolean;
  onClick?: () => void;
  href?: string;
  hideAvatar?: boolean;
  isCopy?: boolean;
};

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
              <Icon.ContentCopy />
            </div>
          </div>
        </CopyText>
      );
    }

    return <div {...componentProps} />;
  };

  return (
    <Component>
      {hideAvatar ? null : <Avatar publicAddress={publicAddress} />}

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
