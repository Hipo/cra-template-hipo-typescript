import "./_home-page.scss";

import {useAppContext} from "../core/app/AppContext";
import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";

function HomePage() {
  const {
    state: {account},
    dispatch
  } = useAppContext();

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
          {account ? <h3>{"Click here to logout"}</h3> : <h3>{"Click here to login"}</h3>}

          <button onClick={toggleLoginState}>{account ? "Logout" : "Login"}</button>
        </div>
      </PageContent>
    </Page>
  );

  function toggleLoginState() {
    dispatch({
      type: "SET_LOGGED_IN_ACCOUNT",
      account: account
        ? null
        : {hipo: "https://github.com/Hipo/cra-template-hipo-typescript"}
    });
  }
}

export default HomePage;
