import { Layout } from "@stellar/design-system";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Details } from "components/Details";
import { SideNav } from "components/SideNav";
import { useSideNavEnabled } from "hooks/useSideNavEnabled";
import { ComponentDetailsId, Routes } from "types/types";

export const ComponentDetails = ({
  sideNavEnabled,
  onToggleSideNav,
}: {
  sideNavEnabled: boolean;
  onToggleSideNav: (isOpen: boolean) => void;
}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  useSideNavEnabled(Boolean(sideNavEnabled));

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [id]);

  const onSideNavItemClick = (componentId: string) => {
    navigate(`/${Routes.component}/${componentId}`);
  };

  return (
    <Layout.Inset>
      <div className="Layout__containerWithSideNav">
        <div className="Layout__containerWithSideNav__sideNavWrapper">
          <SideNav
            activeItemId={id as ComponentDetailsId}
            onClick={onSideNavItemClick}
            onClose={() => onToggleSideNav(false)}
          />
        </div>
        <div className="Layout__containerWithSideNav__contentWrapper">
          <Details componentId={id as ComponentDetailsId} />
        </div>
      </div>
    </Layout.Inset>
  );
};
