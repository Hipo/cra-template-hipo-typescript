import {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";

import AboutPage from "../../about/AboutPage";
import AccountPage from "../../account/AccountPage";
import RouteLoading from "../route/loading/RouteLoading";
import ProtectedRoute from "../route/ProtectedRoute";
import ROUTES from "../route/routes";
import {AppContextProvider} from "./AppContext";

const HomePage = lazy(
  () => import(/* webpackChunkName: "home-page" */ "../../home/HomePage")
);
const NotFoundPage = lazy(
  () =>
    import(
      /* webpackChunkName: "not-found-page" */ "../route/not-found-page/NotFoundPage"
    )
);

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <AppContextProvider>
        <Switch>
          <Route path={ROUTES.HOME} exact={true}>
            <HomePage />
          </Route>

          <Route path={ROUTES.HELP} exact={true}>
            <AboutPage />
          </Route>

          <ProtectedRoute path={ROUTES.ACCOUNT} exact={true}>
            <AccountPage />
          </ProtectedRoute>

          <Route path={"*"}>
            <NotFoundPage />
          </Route>
        </Switch>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
