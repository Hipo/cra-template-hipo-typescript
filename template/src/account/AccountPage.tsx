import "./_account-page.scss";

import PageContent from "../component/page/content/PageContent";
import Page from "../component/page/Page";
import {useAppContext} from "../core/app/AppContext";

function AccountPage() {
  const {dispatch} = useAppContext();

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
    dispatch({
      type: "SET_LOGGED_IN_ACCOUNT",
      account: null
    });
  }
}

export default AccountPage;
