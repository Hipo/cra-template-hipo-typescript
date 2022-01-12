import {FetcherErrorStatus} from "./fetcherTypes";

class FetcherError extends Error {
  data: any;
  status: FetcherErrorStatus;

  constructor(
    options: {
      status: FetcherErrorStatus;
      data: any;
      message: string;
    },
    ...args: any[]
  ) {
    super(...args);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FetcherError);
    }

    this.name = "FetcherError";
    this.status = options.status;
    this.data = options.data;
    this.message = options.message;
  }
}

export default FetcherError;
