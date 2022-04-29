import "./_home-page.scss";

import {Fragment, useEffect} from "react";
import {Button as HipoButton} from "@hipo/react-ui-toolkit";

import {useAppContext} from "../core/app/AppContext";
import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";
import useAsyncProcess from "../core/network/async-process/useAsyncProcess";
import AsyncContent, {AsyncContentStatus} from "../component/async-content/AsyncContent";
import organizationApi from "../examples/organization/api/organizationApi";
import {Organization} from "../examples/organization/api/organizationApiModels";

function HomePage() {
  const {state, runAsyncProcess} = useAsyncProcess<Organization>();

  useEffect(() => {
    (async () => {
      await runAsyncProcess(organizationApi.getOrganization("hipo"));
    })();
  }, [runAsyncProcess]);
  const {
    state: {account},
    dispatch
  } = useAppContext();

  return (
    <Page title={"Home"}>
      <PageContent>
        <h1>{"Home"}</h1>
        <br />

        <p>{"This is the home page of the application."}</p>

        <br />

        <p>{"This is the home page of the application."}</p>

        <p>
          <b>{"Active environment: "}</b>
          {process.env.REACT_APP_BUILD_ENVIRONMENT || "Not defined"}
        </p>

        <br />

        <AsyncContent requestStates={[state]} content={renderAsyncContent} />
        <div className={"home-page__login-container"}>
          {account ? <h3>{"Click here to logout"}</h3> : <h3>{"Click here to login"}</h3>}

          <HipoButton onClick={toggleLoginState}>
            {account ? "Logout" : "Login"}
          </HipoButton>
        </div>
      </PageContent>
    </Page>
  );

  function renderAsyncContent(status: AsyncContentStatus) {
    let node = <Fragment />;

    switch (status) {
      case "pending":
        node = <p>{"Loading..."}</p>;
        break;

      case "error":
        node = <p>{"An error occured!"}</p>;
        break;

      case "success":
        node = (
          <div>
            <p>{state.data?.description}</p>
            <br />

            <a href={state.data?.blog} target={"_blank"} rel={"noreferrer"}>
              {state.data?.blog}
            </a>
          </div>
        );
        break;

      default:
        break;
    }

    return node;
  }

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
