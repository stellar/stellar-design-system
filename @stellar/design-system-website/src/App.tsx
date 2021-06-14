import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "@stellar/design-system";

import { Landing } from "pages/Landing";
import { ComponentDetails } from "pages/ComponentDetails";

import "styles.scss";

export const App = () => (
  <Router>
    {/* TODO: update project link */}
    <Layout.Header
      projectTitle="Design System"
      projectLink="https://www.stellar.org"
      hasDarkModeToggle
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
  </Router>
);
