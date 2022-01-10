import {Button as HipoButton} from "@hipo/react-ui-toolkit";

import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";

function HomePage() {
  return (
    <Page title={"Home"}>
      <PageContent>
        <h1>{"Home"}</h1>

        <p>{"This is the home page of the application."}</p>
        <p>
          <b>{"Active environment: "}</b>
          {process.env.REACT_APP_BUILD_ENVIRONMENT || "Not defined"}
        </p>

        <br />

        <h3>{"Hipo - React UI Toolkit Component Examples"}</h3>

        <div>
          <HipoButton type={"button"} onClick={onClick}>
            {"Click Me"}
          </HipoButton>

          <HipoButton type={"button"} onClick={onClick} isDisabled={true}>
            {"Click Me - isDisabled"}
          </HipoButton>

          <HipoButton type={"button"} shouldDisplaySpinner={true}>
            {"With Spinner"}
          </HipoButton>
        </div>
      </PageContent>
    </Page>
  );

  function onClick() {
    console.log("Thank you");
  }
}

export default HomePage;
