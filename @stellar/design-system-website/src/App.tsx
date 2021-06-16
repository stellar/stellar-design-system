import { useMemo, useState, useLayoutEffect, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "@stellar/design-system";

import { Landing } from "pages/Landing";
import { ComponentDetails } from "pages/ComponentDetails";
import { SideNavContext } from "context/SideNav";

import "styles.scss";

const BREAKPOINT_SMALL = 600;
const CSS_CLASS_SMALL_SCREEN = "small-screen";
const CSS_CLASS_SIDE_NAV_OPEN_TRIGGER = "side-nav-open-trigger";
const CSS_CLASS_SIDE_NAV_OPEN = "side-nav-open";
const CSS_CLASS_DISABLE_BODY_SCROLL = "no-body-scroll";

export const App = () => {
  const [sideNavState, setSideNavState] = useState({
    isEnabled: false,
    isOpen: false,
  });
  const sideNavStateValue = useMemo(
    () => ({ sideNavState, setSideNavState }),
    [sideNavState, setSideNavState],
  );

  const updateSideNavState = (props: { [key: string]: boolean }) => {
    const _sideNavState = sideNavState;
    setSideNavState({ ..._sideNavState, ...props });
  };

  // Handle media query for small/large page UI
  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT_SMALL}px)`);

    const handleMediaQuery = () => {
      if (mediaQuery.matches) {
        document.body.classList.add(CSS_CLASS_SMALL_SCREEN);
      } else {
        document.body.classList.remove(
          CSS_CLASS_SMALL_SCREEN,
          CSS_CLASS_SIDE_NAV_OPEN_TRIGGER,
          CSS_CLASS_SIDE_NAV_OPEN,
          CSS_CLASS_DISABLE_BODY_SCROLL,
        );
      }
    };

    handleMediaQuery();
    mediaQuery.addEventListener("change", handleMediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

  // Handle SideNav open/close state
  useEffect(() => {
    if (sideNavState.isOpen) {
      document.body.classList.add(
        CSS_CLASS_SIDE_NAV_OPEN_TRIGGER,
        CSS_CLASS_SIDE_NAV_OPEN,
        CSS_CLASS_DISABLE_BODY_SCROLL,
      );
    } else {
      document.body.classList.remove(
        CSS_CLASS_SIDE_NAV_OPEN,
        CSS_CLASS_DISABLE_BODY_SCROLL,
      );

      const delay = setTimeout(() => {
        document.body.classList.remove(CSS_CLASS_SIDE_NAV_OPEN_TRIGGER);
        clearTimeout(delay);
      }, 300);
    }
  }, [sideNavState.isOpen]);

  return (
    <Router>
      <SideNavContext.Provider value={sideNavStateValue}>
        {/* TODO: update project link */}
        <Layout.Header
          projectTitle="Design System"
          projectLink="https://www.stellar.org"
          hasDarkModeToggle
          menu={{
            isEnabled: sideNavState.isEnabled,
            onOpen: () => updateSideNavState({ isOpen: true }),
          }}
        />

        <Layout.Content>
          <Switch>
            <Route exact path="/component/:id">
              <ComponentDetails sideNavEnabled />
            </Route>

            <Route path="/">
              <Landing />
            </Route>

            {/* TODO: add 404 */}
          </Switch>
        </Layout.Content>

        <Layout.Footer gitHubLink="https://github.com/stellar/stellar-design-system" />
      </SideNavContext.Provider>
    </Router>
  );
};
