import "./_home-page.scss";

import {useNavigate} from "react-router";

import {useAppContext} from "../core/app/AppContext";
import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";
import ROUTES from "../core/route/routes";

function HomePage() {
  const {
    state: {account},
    dispatch
  } = useAppContext();
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

        <div className={"home-page__login-container"}>
          {!account && <h3>{"Login to go to account page"}</h3>}

          <button onClick={toggleLoginState}>{account ? "Logout" : "Login"}</button>
        </div>
      </PageContent>
    </Page>
  );

  function toggleLoginState() {
    dispatch({
      type: "SET_HAS_LOGGED_IN",
      account: account
        ? null
        : {hipo: "https://github.com/Hipo/cra-template-hipo-typescript"}
    });
    
    if (account) {
      navigate(ROUTES.ACCOUNT);
    }
  }
}

export default HomePage;
