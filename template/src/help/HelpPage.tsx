import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";

function HelpPage() {
  return (
    <Page title={"Help"}>
      <PageContent>
        <h1>{"Help"}</h1>

        <p>{"This app was created using Hipo React TypeScript template."}</p>
      </PageContent>
    </Page>
  );
}

export default HelpPage;
