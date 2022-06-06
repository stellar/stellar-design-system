import { Layout } from "@stellar/design-system";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Details } from "components/Details";
import { SideNav } from "components/SideNav";
import { useSideNavEnabled } from "hooks/useSideNavEnabled";
import { ComponentDetailsId, Routes } from "types/types";

interface paramProps {
  id: ComponentDetailsId;
}

export const ComponentDetails = ({
  sideNavEnabled,
  onToggleSideNav,
}: {
  sideNavEnabled: boolean;
  onToggleSideNav: (isOpen: boolean) => void;
}) => {
  const history = useHistory();
  const params: paramProps = useParams();

  useSideNavEnabled(Boolean(sideNavEnabled));

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [params.id]);

  const onSideNavItemClick = (componentId: string) => {
    history.push(`/${Routes.component}/${componentId}`);
  };

  return (
    <Layout.Inset>
      <div className="Layout__containerWithSideNav">
        <div className="Layout__containerWithSideNav__sideNavWrapper">
          <SideNav
            activeItemId={params.id}
            onClick={onSideNavItemClick}
            onClose={() => onToggleSideNav(false)}
          />
        </div>
        <div className="Layout__containerWithSideNav__contentWrapper">
          <Details componentId={params.id} />
        </div>
      </div>
    </Layout.Inset>
  );
};
