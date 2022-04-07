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
      </PageContent>
    </Page>
  );
}

export default HomePage;
