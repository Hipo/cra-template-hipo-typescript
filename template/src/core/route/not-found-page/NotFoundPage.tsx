import {Link} from "react-router-dom";

import PageContent from "../../../component/page/content/PageContent";
import Page from "../../../component/page/Page";
import ROUTES from "../routes";

function NotFoundPage() {
  return (
    <Page title={"Not Found"}>
      <PageContent>
        <h1>{"Not Found"}</h1>

        <p>{"We couldn't find this page"}</p>

        <Link to={ROUTES.HOME}>{"Go Home"}</Link>
      </PageContent>
    </Page>
  );
}

export default NotFoundPage;
