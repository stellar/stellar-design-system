import { useContext, useEffect } from "react";
import { SideNavContext } from "context/SideNav";

export const useSideNavEnabled = (sideNavEnabled: boolean) => {
  const { setSideNavState } = useContext(SideNavContext);

  useEffect(() => {
    setSideNavState({
      isEnabled: Boolean(sideNavEnabled),
      isOpen: false,
    });
  }, [setSideNavState, sideNavEnabled]);
};
