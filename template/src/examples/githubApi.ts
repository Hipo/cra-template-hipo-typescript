import Fetcher from "../core/network/Fetcher";
import {fetchJSONMiddleware} from "../core/network/fetcherUtils";

const GithubApi = new Fetcher({
  baseUrl: "https://api.github.com/",
  initOptions: {headers: {"Content-Type": "application/json"}},
  responseMiddlewares: [fetchJSONMiddleware],
  bodyParser: JSON.stringify
});

export default GithubApi;
