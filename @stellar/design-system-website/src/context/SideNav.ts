import { createContext } from "react";

interface SideNavContextProps {
  sideNavState: {
    isEnabled: boolean;
    isOpen: boolean;
  };
  // TODO: any
  setSideNavState: (props: any) => void;
}

export const SideNavContext = createContext<SideNavContextProps>({
  sideNavState: {
    isEnabled: false,
    isOpen: false,
  },
  setSideNavState: () => {},
});
