import { Layout } from "@stellar/design-system";
import { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Details } from "components/Details";
import { SideNav } from "components/SideNav";
import { SideNavContext } from "context/SideNav";
import { ComponentDetailsId, Routes } from "types/types.d";

interface paramProps {
  id: ComponentDetailsId;
}

export const ComponentDetails = ({
  sideNavEnabled,
}: {
  sideNavEnabled?: boolean;
}) => {
  const history = useHistory();
  const params: paramProps = useParams();

  const { sideNavState, setSideNavState } = useContext(SideNavContext);

  // TODO: same as in App.tsx, create custom hook?
  const updateSideNavState = (props: { [key: string]: boolean }) => {
    const _sideNavState = sideNavState;
    setSideNavState({ ..._sideNavState, ...props });
  };

  useEffect(() => {
    setSideNavState({
      isEnabled: Boolean(sideNavEnabled),
      isVisible: false,
      isOpen: false,
    });
  }, [setSideNavState, sideNavEnabled]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [params.id]);

  const onSideNavItemClick = (componentId: string) => {
    history.push(`/${Routes.component}/${componentId}`);
  };

  // TODO: consistent names (SideNav vs Subnav)

  return (
    <Layout.Inset>
      <div className="Layout__containerWithSubnav">
        <div className="Layout__containerWithSubnav__subnavWrapper">
          <SideNav
            activeItemId={params.id}
            onClick={onSideNavItemClick}
            onClose={() => updateSideNavState({ isOpen: false })}
          />
        </div>
        <div className="Layout__containerWithSubnav__contentWrapper">
          <Details componentId={params.id} />
        </div>
      </div>
    </Layout.Inset>
  );
};
