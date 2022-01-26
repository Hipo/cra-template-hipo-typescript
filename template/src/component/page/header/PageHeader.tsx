import {ReactComponent as HipoLogo} from "../../../core/ui/image/hipo-logo.svg";

import "./_page-header.scss";

import {Link} from "react-router-dom";

import ROUTES from "../../../core/route/routes";
import {useAppContext} from "../../../core/app/AppContext";

function PageHeader() {
  const {state} = useAppContext();
  const headerRoutes = setHeaderRoutes();

  return (
    <header className={"page-header"}>
      <div className={"page-header__content"}>
        <div className={"page-header__hipo-brand"}>
          <HipoLogo className={"page-header__hipo-brand__logo"} />

          <h1>{"Hipo Web App"}</h1>
        </div>

        <ul className={"page-header__nav-link-list"}>
          {headerRoutes.map(([routeKey, routePath]) => (
            <li key={routeKey}>
              <Link to={routePath}>{routeKey}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );

  function setHeaderRoutes() {
    return state.hasLoggedIn
      ? Object.entries(ROUTES)
      : Object.entries(ROUTES).filter(([, routePath]) => routePath !== "/account");
  }
}
export default PageHeader;
