import { createContext } from "react";

interface SideNavContextProps {
  sideNavOpen: boolean;
  setSideNavOpen: (value: boolean) => void;
}

export const SideNavContext = createContext<SideNavContextProps>({
  sideNavOpen: false,
  setSideNavOpen: () => {},
});
