import {LoaderFunctionArgs} from "react-router-dom";

import organizationApi from "../api/organizationApi";

async function organizationDetailRouteLoader({
  params: {organizationId}
}: LoaderFunctionArgs) {
  try {
    if (!organizationId) throw new Error("Organization ID is required");
    return await organizationApi.getOrganization(organizationId);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {organizationDetailRouteLoader};
