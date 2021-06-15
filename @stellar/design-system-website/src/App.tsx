import { useMemo, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "@stellar/design-system";

import { Landing } from "pages/Landing";
import { ComponentDetails } from "pages/ComponentDetails";
import { SideNavContext } from "context/SideNav";

import "styles.scss";

export const App = () => {
  const [sideNavOpen, setSideNavOpen] = useState(true);
  const sideNavValue = useMemo(
    () => ({ sideNavOpen, setSideNavOpen }),
    [sideNavOpen, setSideNavOpen],
  );

  return (
    <Router>
      <SideNavContext.Provider value={sideNavValue}>
        {/* TODO: update project link */}
        <Layout.Header
          projectTitle="Design System"
          projectLink="https://www.stellar.org"
          hasDarkModeToggle
          onOpenMenu={() => setSideNavOpen(true)}
        />

        <Layout.Content>
          <Switch>
            <Route exact path="/component/:id">
              <ComponentDetails />
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
