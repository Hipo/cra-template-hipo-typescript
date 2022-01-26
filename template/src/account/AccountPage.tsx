import "./_account-page.scss";

import {useNavigate} from "react-router";

import PageContent from "../component/page/content/PageContent";
import Page from "../component/page/Page";
import {useAppContext} from "../core/app/AppContext";
import ROUTES from "../core/route/routes";

function AccountPage() {
  const {state, dispatch} = useAppContext();
  const navigate = useNavigate();

  return (
    <Page title={"Account"}>
      <PageContent>
        <h1>{"Account"}</h1>

        <p>{"This is the account page of the application."}</p>

        <div className={"account-page__logout-container"}>
          <h3>{"Click here to logout"}</h3>

          <button onClick={handleLogout}>{"Logout"}</button>
        </div>
      </PageContent>
    </Page>
  );

  function handleLogout() {
    if (state.hasLoggedIn) {
      dispatch({
        type: "SET_HAS_LOGGED_IN"
      });
    }

    navigate(ROUTES.HOME);
  }
}

export default AccountPage;
