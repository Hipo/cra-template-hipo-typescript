import Page from "../component/page/Page";
import PageContent from "../component/page/content/PageContent";

function AboutPage() {
  return (
    <Page title={"About"}>
      <PageContent>
        <h1>{"About"}</h1>

        <p>{"This app was created using Hipo React TypeScript template."}</p>
      </PageContent>
    </Page>
  );
}

export default AboutPage;
