import "./_home-page.scss";

import {Fragment} from "react";
import { useNavigate } from "react-router";

import {useAppContext} from "../core/app/AppContext";
import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";
import ROUTES from "../core/route/routes";

function HomePage() {
  const {state, dispatch} = useAppContext();
  const navigate = useNavigate();

  return (
    <Page title={"Home"}>
      <PageContent>
        <h1>{"Home"}</h1>

        <p>{"This is the home page of the application."}</p>
        <p>
          <b>{"Active environment: "}</b>
          {process.env.REACT_APP_BUILD_ENVIRONMENT || "Not defined"}
        </p>

        {state.hasLoggedIn ? (
          <Fragment />
        ) : (
          <div className={"home-page__login-container"}>
            <h3>{"Login to go to your account"}</h3>

            <button onClick={handleLogin}>
              {"Login"}
            </button>
          </div>
        )}
      </PageContent>
    </Page>
  );

  function handleLogin() {
    if (!state.hasLoggedIn) {
      dispatch({
        type: "SET_HAS_LOGGED_IN"
      });
    }

    navigate(ROUTES.ACCOUNT);
  }
}

export default HomePage;
