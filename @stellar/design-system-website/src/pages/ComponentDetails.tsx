import { Layout } from "@stellar/design-system";
import React, { useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Details } from "components/Details";
import { SideNav } from "components/SideNav";
import { SideNavContext } from "context/SideNav";
import { ComponentDetailsId, Routes } from "types/types.d";

// const MODAL_OPEN_CLASS_NAME = "modal-open";

interface paramProps {
  id: ComponentDetailsId;
}

export const ComponentDetails = () => {
  const history = useHistory();
  const params: paramProps = useParams();

  const { sideNavOpen, setSideNavOpen } = useContext(SideNavContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [params.id]);

  // useEffect(() => {
  //   if (sideNavOpen) {
  //     document.body.classList.add(MODAL_OPEN_CLASS_NAME);
  //   } else {
  //     document.body.classList.remove(MODAL_OPEN_CLASS_NAME);
  //   }
  // }, [sideNavOpen]);

  const onSideNavItemClick = (componentId: string) => {
    history.push(`/${Routes.component}/${componentId}`);
  };

  // TODO: consistent names (SideNav vs Subnav)

  const customStyle = {
    "--SideNav-translate-x": sideNavOpen ? 0 : "var(--SideNav-width)",
  } as React.CSSProperties;

  return (
    <Layout.Inset>
      <div className="Layout__containerWithSubnav">
        <div
          className={`Layout__containerWithSubnav__subnavWrapper ${
            sideNavOpen ? "SideNav--open" : ""
          }`}
          style={customStyle}
        >
          <SideNav
            activeItemId={params.id}
            onClick={onSideNavItemClick}
            onClose={() => setSideNavOpen(false)}
          />
        </div>
        <div className="Layout__containerWithSubnav__contentWrapper">
          <Details componentId={params.id} />
        </div>
      </div>
    </Layout.Inset>
  );
};
