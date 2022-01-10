import { Fragment } from "react";
import { Redirect, Route, RouteProps } from "react-router";
import {LocationDescriptor} from "history";

import ROUTES from "./routes";
import {useAppContext} from "../app/AppContext";

type ProtectedRouteProps =  RouteProps & {
  redirectTo?: LocationDescriptor;
  fallback?: React.ReactNode;
};

function ProtectedRoute({redirectTo, fallback, ...otherProps}: ProtectedRouteProps) {
  const {state: appState} = useAppContext();

  if (appState.hasLoggedIn) {
    return <Route {...otherProps} />;
  }

  return fallback ? (
    <Fragment>{fallback}</Fragment>
  ) : (
    <Redirect to={redirectTo || ROUTES.HOME} />
  );
}

export default ProtectedRoute;
