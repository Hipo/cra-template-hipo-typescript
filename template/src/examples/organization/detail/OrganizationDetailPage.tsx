import {useLoaderData} from "react-router-dom";

import {organizationDetailRouteLoader} from "./OrganizationDetailPage.loader";
import Page from "../../../component/page/Page";
import PageContent from "../../../component/page/content/PageContent";

function OrganizationDetailPage() {
  const organizationData = useLoaderData() as Awaited<
    ReturnType<typeof organizationDetailRouteLoader>
  >;

  return (
    <Page title={"Help"}>
      <PageContent>
        {organizationData ? (
          <div>
            <h1>{organizationData.name}</h1>
            <p>{organizationData.description}</p>
          </div>
        ) : (
          <p>{"Organization not found! Please check the name."}</p>
        )}
      </PageContent>
    </Page>
  );
}

export default OrganizationDetailPage;
