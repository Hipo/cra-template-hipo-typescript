import {lazy, Suspense} from "react";
import {Switch, Route} from "react-router-dom";

import AboutPage from "../../about/AboutPage";
import RouteLoading from "../route/loading/RouteLoading";
import ROUTES from "../route/routes";

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
