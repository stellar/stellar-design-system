import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "@stellar/design-system";

import { Details } from "components/Details";
import { Landing } from "pages/Landing";

import "styles.scss";

export const App = () => (
  <Router>
    {/* TODO: update project link */}
    <Layout.Header
      projectTitle="Design System"
      projectLink="https://www.stellar.org"
      // TODO: removing until we have dark mode colors
      // hasDarkModeToggle
    />

    <Layout.Content>
      <Switch>
        <Route exact path="/component/:id">
          <Details />
        </Route>

        <Route path="/">
          <Landing />
        </Route>

        {/* TODO: add 404 */}
      </Switch>
    </Layout.Content>

    <Layout.Footer gitHubLink="https://github.com/stellar/stellar-design-system" />
  </Router>
);
