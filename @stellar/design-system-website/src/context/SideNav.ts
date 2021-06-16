import { createContext } from "react";

type SideNavStateProps = {
  isEnabled: boolean;
  isOpen: boolean;
};

interface SideNavContextProps {
  sideNavState: SideNavStateProps;
  setSideNavState: (props: SideNavStateProps) => void;
}

export const SideNavContext = createContext<SideNavContextProps>({
  sideNavState: {
    isEnabled: false,
    isOpen: false,
  },
  setSideNavState: () => {},
});
