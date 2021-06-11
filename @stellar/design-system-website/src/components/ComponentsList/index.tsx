import { Icon } from "@stellar/design-system";
import { useHistory } from "react-router-dom";
import { componentDetails } from "constants/componentDetails";
import { ComponentDetailsId, Routes } from "types/types.d";
import "./styles.scss";

const componentsDisplayOrder = [
  ComponentDetailsId.typography,
  ComponentDetailsId.branding,
  ComponentDetailsId.assets,
  ComponentDetailsId.identicons,
  ComponentDetailsId.loaders,
  ComponentDetailsId.infoBlocks,
  ComponentDetailsId.buttons,
  ComponentDetailsId.iconButtons,
  ComponentDetailsId.textLinks,
  ComponentDetailsId.inputs,
  ComponentDetailsId.selects,
  ComponentDetailsId.checkboxes,
  ComponentDetailsId.radioButtons,
  ComponentDetailsId.toggles,
  ComponentDetailsId.modals,
  ComponentDetailsId.layout,
];

export const ComponentsList = () => {
  const history = useHistory();

  const goToComponentDetails = (componentId: string) => {
    history.push(`./${Routes.component}/${componentId}`);
  };

  return (
    <div className="ComponentsList">
      {componentsDisplayOrder.map((key) => {
        const comp = componentDetails[key];

        if (!comp) {
          return null;
        }

        return (
          <div
            className="ComponentCard"
            key={key}
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
