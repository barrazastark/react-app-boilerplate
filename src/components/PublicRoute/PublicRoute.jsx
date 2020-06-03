import React, { Suspense, lazy } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { PageLoader } from "UIElements";

import "rsuite/dist/styles/rsuite-default.css";
import "./PublicRoute.scss";

const Login = lazy(() => import("../../containers/Login"));
const Register = lazy(() => import("../../containers/Register"));
const NewPassword = lazy(() => import("../../containers/NewPassword"));

export const blockName = "public-page-wrapper";

const PublicRoute = ({ fetchingSession, loggedInUser }) => {
  if (loggedInUser) {
    return <Redirect to="/" />;
  }

  return fetchingSession ? (
    <PageLoader message="Autenticando" />
  ) : (
    <div className={blockName}>
      <Suspense fallback={<PageLoader />}>
        <Switch>
          <Route exact path="/auth" component={Login} />
          <Route path="/auth/register" component={Register} />
          <Route path="/auth/new-password" component={NewPassword} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default PublicRoute;
