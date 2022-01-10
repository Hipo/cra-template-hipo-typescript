import {useHistory} from "react-router";

import PageContent from "../component/page/content/PageContent";
import Page from "../component/page/Page";
import {useAppContext} from "../core/app/AppContext";
import ROUTES from "../core/route/routes";

function AccountPage() {
  const {state, dispatch} = useAppContext();
  const history = useHistory();

  return (
    <Page title={"Account"}>
      <PageContent>
        <h2>{"You are logged in!"}</h2>

        <p>{"This is the account page of the application."}</p>

        <h3 style={{marginTop: "20px"}}>{"Click here to logout"}</h3>
        
        <button onClick={handleLogout} style={{marginTop: "15px"}}>{"Logout"}</button>
      </PageContent>
    </Page>
  );

  function handleLogout() {
    if (state.hasLoggedIn) {
      dispatch({
        type: "SET_HAS_LOGGED_IN"
      });
    }

    history.push(ROUTES.HOME);
  }
}

export default AccountPage;
