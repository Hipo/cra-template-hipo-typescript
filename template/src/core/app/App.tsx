import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

import AccountPage from "../../account/AccountPage";
import RouteLoading from "../route/loading/RouteLoading";
import RequireAccount from "../route/RequireAccount";
import ROUTES from "../route/routes";
import {AppContextProvider} from "./AppContext";
import HomePage from "../../home/HomePage";
import NotFoundPage from "../route/not-found-page/NotFoundPage";
import {isOnProductionEnv} from "../util/environment/environmentUtils";
import ComponentListPage from "../../component/component-list/ComponentListPage";

const HelpPage = lazy(
  () => import(/* webpackChunkName: "help-page" */ "../../help/HelpPage")
);

function App() {
  return (
    <Suspense fallback={<RouteLoading />}>
      <AppContextProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />

          <Route path={ROUTES.HELP} element={<HelpPage />} />

          <Route
            path={ROUTES.ACCOUNT}
            element={
              <RequireAccount>
                <AccountPage />
              </RequireAccount>
            }
          />

          {
            /**
             * Development and testing only routes
             */
            isOnProductionEnv() && (
              <Route path={ROUTES.COMPONENT_LIST} element={<ComponentListPage />} />
            )
          }

          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
