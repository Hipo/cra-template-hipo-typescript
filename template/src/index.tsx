// 3rd party CSS imports should come here
import "@hipo/react-ui-toolkit/dist/main.css";

import "./core/ui/style/override/_override.scss";
import "./core/ui/style/_align.scss";
import "./core/ui/style/_measure.scss";
import "./core/ui/style/_common.scss";
import "./core/ui/typography/_typography.scss";
import "./core/ui/style/color/_global-colors.scss";

// 3rd party CSS override imports should come here
import "./core/ui/style/override/hipo-ui-toolkit/_button.scss";

import React, {Suspense, lazy} from "react";
import {createRoot} from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

import ROUTES from "./core/route/routes";
import OrganizationDetailPage from "./examples/organization/detail/OrganizationDetailPage";
import {organizationDetailRouteLoader} from "./examples/organization/detail/OrganizationDetailPage.loader";
import {AppContextProvider} from "./core/app/AppContext";
import HomePage from "./home/HomePage";
import AccountPage from "./account/AccountPage";
import RequireAccount from "./core/route/RequireAccount";
import NotFoundPage from "./core/route/not-found-page/NotFoundPage";
import RouteLoading from "./core/route/loading/RouteLoading";

/**
 * Lazy loading is a good way to reduce the initial bundle size of your application.
 * And decrease the time it takes to load the application, which improves the user experience.
 * But if the component you are trying to lazy load is too small, or doesn't include
 * a lot of nested/child components, it's possibly not worth it.
 */
const HelpPage = lazy(
  () => import(/* webpackChunkName: "help-page" */ "./help/HelpPage")
);

const container = document.getElementById("app");
const root = createRoot(container!);
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTES.HOME} element={<HomePage />} />

      <Route path={ROUTES.HELP} element={<HelpPage />} />

      <Route
        path={ROUTES.ORGANIZATION_DETAIL}
        loader={organizationDetailRouteLoader}
        element={<OrganizationDetailPage />}
      />

      <Route
        path={ROUTES.ACCOUNT}
        element={
          <RequireAccount>
            <AccountPage />
          </RequireAccount>
        }
      />

      <Route path={"*"} element={<NotFoundPage />} />
    </>
  )
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<RouteLoading />}>
      <AppContextProvider>
        <RouterProvider router={router} />
      </AppContextProvider>
    </Suspense>
  </React.StrictMode>
);
