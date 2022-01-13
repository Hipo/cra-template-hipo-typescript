import {Fragment} from "react";
import {Navigate, RouteProps} from "react-router";
import {To} from "history";

import ROUTES from "./routes";
import {useAppContext} from "../app/AppContext";

type ProtectedRouteProps = RouteProps & {
  children: React.ReactNode;
  redirectTo?: To;
  fallback?: React.ReactNode;
};

function ProtectedRoute({redirectTo, fallback, children}: ProtectedRouteProps) {
  const {state: appState} = useAppContext();

  if (appState.hasLoggedIn) {
    return <Fragment>{children}</Fragment>;
  }

  return fallback ? (
    <Fragment>{fallback}</Fragment>
  ) : (
    <Navigate to={redirectTo || ROUTES.HOME} replace={true} />
  );
}

export default ProtectedRoute;
