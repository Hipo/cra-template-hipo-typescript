import GithubApi from "../../core/network/githubApi";
import {Organization} from "./organizationApiModels";

const ORGANIZATION_API_ROOT = "orgs/";

const organizationApi = {
  getOrganization(name: string) {
    return GithubApi.run<Organization>(
      {method: "GET"},
      `${ORGANIZATION_API_ROOT}${name}`
    );
  }
};

export default organizationApi;
