import {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";

import RouteLoading from "../route/loading/RouteLoading";
import ROUTES from "../route/routes";
import HomePage from "../../home/HomePage";
import NotFoundPage from "../route/not-found-page/NotFoundPage";

const AboutPage = lazy(
  () => import(/* webpackChunkName: "about-page" */ "../../about/AboutPage")
);

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <Switch>
        <Route path={ROUTES.HOME} exact={true}>
          <HomePage />
        </Route>

        <Route path={ROUTES.HELP} exact={true}>
          <AboutPage />
        </Route>

        <Route path={"*"}>
          <NotFoundPage />
        </Route>
      </Switch>
    </Suspense>
  );
}

export default App;
