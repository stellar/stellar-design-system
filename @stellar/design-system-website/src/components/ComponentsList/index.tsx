import { Icon } from "@stellar/design-system";
import { useNavigate } from "react-router-dom";
import { componentDetails } from "constants/componentDetails";
import { componentsInDisplayOrder } from "constants/componentsInDisplayOrder";
import { Routes } from "types/types";
import "./styles.scss";

export const ComponentsList = () => {
  const navigate = useNavigate();

  const goToComponentDetails = (componentId: string) => {
    navigate(`/${Routes.component}/${componentId}`);
  };

  return (
    <div className="ComponentsList">
      {componentsInDisplayOrder.map((key) => {
        const comp = componentDetails[key.id];

        if (!comp) {
          return null;
        }

        return (
          <div
            className="ComponentCard"
            key={key.id}
            onClick={() => goToComponentDetails(comp.id)}
            role="button"
          >
            <div className="ComponentCard__title">
              {comp.title}
              <Icon.ArrowRight />
            </div>
            <p className="Paragraph--secondary">{comp.shortDescription}</p>
          </div>
        );
      })}
    </div>
  );
};
