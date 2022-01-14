import {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";

import RouteLoading from "../route/loading/RouteLoading";
import ROUTES from "../route/routes";
import HomePage from "../../home/HomePage";
import NotFoundPage from "../route/not-found-page/NotFoundPage";

const HelpPage = lazy(
  () => import(/* webpackChunkName: "help-page" */ "../../help/HelpPage")
);

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Switch>
        <Route path={ROUTES.HOME} exact={true}>
          <HomePage />
        </Route>

        <Route path={ROUTES.HELP} exact={true}>
          <HelpPage />
        </Route>

        <Route path={"*"}>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
