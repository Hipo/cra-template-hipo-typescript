import Fetcher from "./Fetcher";
import {fetchJSONMiddleware} from "./fetcherUtils";

const GithubApi = new Fetcher({
  baseUrl: "https://api.github.com/",
  initOptions: {headers: {"Content-Type": "application/json"}},
  responseMiddlewares: [fetchJSONMiddleware]
});

export default GithubApi;
