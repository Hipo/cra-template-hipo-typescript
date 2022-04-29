import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

import AccountPage from "../../account/AccountPage";
import RouteLoading from "../route/loading/RouteLoading";
import RequireAccount from "../route/RequireAccount";
import ROUTES from "../route/routes";
import {AppContextProvider} from "./AppContext";
import HomePage from "../../home/HomePage";
import NotFoundPage from "../route/not-found-page/NotFoundPage";

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

          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
