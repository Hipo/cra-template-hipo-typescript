import {lazy, Suspense} from "react";
import {Routes, Route} from "react-router-dom";

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
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />

          <Route path={ROUTES.HELP} element={<AboutPage />} />

          <Route
            path={ROUTES.ACCOUNT}
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />

          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
