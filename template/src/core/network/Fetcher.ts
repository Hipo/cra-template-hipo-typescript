import {isObject} from "../util/object/objectUtils";
import {stringifySearchParams} from "../util/url/urlUtils";
import FetcherError from "./FetcherError";
import {fetchJSONMiddleware} from "./fetcherUtils";

export type FetcherMiddleware<Argument = any, ResolveWith = any> = (
  dataFromLastMiddleware: Argument
) => Promise<ResolveWith>;

interface FetcherConfig {
  baseUrl: string;
  initOptions?: RequestInit;
  responseMiddlewares?: FetcherMiddleware[];
  rejectMiddlewares?: FetcherMiddleware[];
  bodyParser?: (body: any) => any;
}

class Fetcher {
  config: FetcherConfig;

  constructor(config: FetcherConfig) {
    this.config = {
      responseMiddlewares: [fetchJSONMiddleware],
      rejectMiddlewares: [],
      ...config,
      initOptions: {
        ...(config.initOptions || {})
      }
    };
  }

  run<Response>(
    options: Omit<RequestInit, "method" | "body"> & {
      method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS";
      params?: Record<string, any>;
      responseMiddlewares?: FetcherMiddleware[];
      rejectMiddlewares?: FetcherMiddleware[];
      body?: any;
    },
    path: string
  ): Promise<Response> {
    const {baseUrl, initOptions, bodyParser} = this.config;
    const {params, responseMiddlewares, rejectMiddlewares, body, ...otherOptions} =
      options;

    const url =
      isObject(params) && Object.keys(params).length
        ? `${baseUrl}${path}?${stringifySearchParams(params)}`
        : `${baseUrl}${path}`;

    const promise = fetch(url, {
      body: bodyParser ? bodyParser(body) : body,
      ...initOptions,
      ...otherOptions
    });

    return promise
      .catch((error) => {
        if (error.name === "AbortError") {
          return Promise.reject(
            new FetcherError({
              status: "Cancelled",
              data: error,
              message: "Request cancelled"
            })
          );
        }

        return Promise.reject(
          new FetcherError({
            status: "ConnectionError",
            data: error,
            message: "Network error. Try again later."
          })
        );
      })

      .then((response) => {
        if (response.ok) {
          return Promise.resolve(response);
        }

        return response.text().then((text) => {
          throw JSON.parse(text);
        });
      })
      .then(async (response) => {
        const middlewares = responseMiddlewares || this.config.responseMiddlewares;
        let final = response;

        if (middlewares) {
          for (const middleware of middlewares) {
            final = await middleware(final);
          }
        }

        return final as unknown as Promise<Response>;
      })
      .catch(async (errorResponse) => {
        if (errorResponse.status === "Cancelled") {
          return Promise.reject();
        }

        const middlewares = rejectMiddlewares || this.config.rejectMiddlewares;
        let finalError = new FetcherError({
          status: errorResponse.status,
          data: errorResponse,
          message: `${otherOptions.method} ${url} request failed`
        });

        if (middlewares) {
          for (const middleware of middlewares) {
            finalError = await middleware(finalError);
          }
        }

        return Promise.reject(finalError);
      });
  }
}

export default Fetcher;
