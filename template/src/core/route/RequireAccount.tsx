import {Fragment} from "react";
import {Navigate, RouteProps} from "react-router";
import {To} from "history";

import ROUTES from "./routes";
import {useAppContext} from "../app/AppContext";

type RequireAccountProps = RouteProps & {
  children: React.ReactNode;
  redirectTo?: To;
  fallback?: React.ReactNode;
};

function RequireAccount({redirectTo, fallback, children}: RequireAccountProps) {
  const {state: appState} = useAppContext();

  if (appState.account) {
    return <Fragment>{children}</Fragment>;
  }

  return fallback ? (
    <Fragment>{fallback}</Fragment>
  ) : (
    <Navigate to={redirectTo || ROUTES.HOME} replace={true} />
  );
}

export default RequireAccount;
