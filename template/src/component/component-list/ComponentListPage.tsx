import {Button as HipoButton} from "@hipo/react-ui-toolkit";

import PageContent from "../page/content/PageContent";
import Page from "../page/Page";

function ComponentListPage() {
  return (
    <Page title={"Components Page"}>
      <PageContent>
        <h1>{"Button"}</h1>

        <HipoButton onClick={handleButtonClick}>{"Click"}</HipoButton>
      </PageContent>
    </Page>
  );

  function handleButtonClick() {
    console.log("Clicked!");
  }
}

export default ComponentListPage;
