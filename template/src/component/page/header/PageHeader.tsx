import {ReactComponent as HipoLogo} from "../../../core/ui/image/hipo-logo.svg";

import "./_page-header.scss";

import {Link} from "react-router-dom";

import ROUTES from "../../../core/route/routes";

function PageHeader() {
  return (
    <header className={"page-header"}>
      <div className={"page-header__content"}>
        <div className={"page-header__hipo-brand"}>
          <HipoLogo />

          <h1>{"Hipo Web App"}</h1>
        </div>

        <ul className={"page-header__nav-link-list"}>
          {Object.entries(ROUTES).map(([routeKey, routePath]) => (
            <li key={routeKey}>
              <Link to={routePath}>{routeKey}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default PageHeader;
