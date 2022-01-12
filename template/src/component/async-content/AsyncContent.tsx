import {Fragment} from "react";

export type AsyncContentStatus = "error" | "pending" | "success";
export type AsyncContentError = undefined | AsyncProcessState["error"];

interface AsyncContentProps {
  requestStates: AsyncProcessState[];
  content: (status: AsyncContentStatus, error?: AsyncContentError) => JSX.Element;
}

function AsyncContent({requestStates, content}: AsyncContentProps) {
  const isAllFetched = requestStates.every((request) => request.isRequestFetched);
  const isAnyPending = requestStates.some((request) => request.isRequestPending);
  const requestError = requestStates.find((request) => request.error);
  let node = <Fragment />;

  if (isAnyPending) {
    node = content("pending");
  }

  if (isAllFetched) {
    if (requestError) {
      node = content("error", requestError.error);
    } else {
      node = content("success");
    }
  }

  return node;
}

export default AsyncContent;
