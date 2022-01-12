import {Fragment, useEffect} from "react";

import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";
import useAsyncProcess from "../core/network/async-process/useAsyncProcess";
import organizationApi from "../organization/api/organizationApi";
import AsyncContent, {AsyncContentStatus} from "../component/async-content/AsyncContent";
import {Organization} from "../organization/api/organizationApiModels";

function HomePage() {
  const {state, runAsyncProcess} = useAsyncProcess<Organization>();

  useEffect(() => {
    (async () => {
      await runAsyncProcess(organizationApi.getOrganization("hipo"));
    })();
  }, [runAsyncProcess]);

  return (
    <Page title={"Home"}>
      <PageContent>
        <h1>{"Home"}</h1>
        <br />

        <p>{"This is the home page of the application."}</p>

        <br />

        <p>
          <b>{"Active environment: "}</b>
          {process.env.REACT_APP_BUILD_ENVIRONMENT || "Not defined"}
        </p>

        <br />

        <AsyncContent requestStates={[state]} content={renderAsyncContent} />
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

            <a href={state.data?.blog}>{state.data?.blog}</a>
          </div>
        );
        break;

      default:
        break;
    }

    return node;
  }
}

export default HomePage;
