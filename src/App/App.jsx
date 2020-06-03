import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PrivateRoute } from "components";
import { PageLoader } from "UIElements";
import "./App.scss";

const Main = lazy(() => import("../containers/Main"));
const PublicRoute = lazy(() => import("../containers/PublicRoute"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader message="Verificando autenticacion" />}>
        <Switch>
          <Route path="/auth" component={PublicRoute} />
          <PrivateRoute exact path="/" component={Main} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
