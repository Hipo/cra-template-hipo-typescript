import {useAppContext} from "../core/app/AppContext";
import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";

function HomePage() {
  const {state, dispatch} = useAppContext();

  console.log(state.hasLoggedIn);

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
          <h3 style={{marginTop: "20px"}}>{"You are logged in!"}</h3>
          ) : (
          <div>
            <h3 style={{marginTop: "20px"}}>{"Login to access your account"}</h3>

            <button onClick={handleLogin} style={{marginTop: "15px"}}>
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
  }
}

export default HomePage;
