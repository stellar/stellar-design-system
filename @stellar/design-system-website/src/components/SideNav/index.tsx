import { NavButton, Icon } from "@stellar/design-system";
import { componentsInDisplayOrder } from "constants/componentsInDisplayOrder";
import "./styles.scss";

interface SideNavProps {
  activeItemId: string;
  onClick: (id: string) => void;
  onClose: () => void;
}

export const SideNav = ({ activeItemId, onClick, onClose }: SideNavProps) => {
  const handleClick = (itemId: string) => {
    onClick(itemId);
    onClose();
  };

  return (
    <div className="SideNav">
      <div className="SideNav__content">
        {componentsInDisplayOrder.map((item) => {
          const isActive = activeItemId === item.id;

          return (
            <div
              key={`sideNav-${item.id}`}
              role="button"
              className={`SideNav__item ${
                isActive ? "SideNav__item--active" : ""
              }`}
              {...(isActive ? {} : { onClick: () => handleClick(item.id) })}
            >
              {item.label}
            </div>
          );
        })}
      </div>

      <div className="SideNav__close">
        <NavButton
          id="side-nav-close"
          title="Close side navigation"
          onClick={onClose}
          icon={<Icon.Close />}
        />
      </div>
    </div>
  );
};
