import {useCallback, useEffect, useRef, useState} from "react";

import useOnUnmount from "../../util/hook/useOnUnmount";

const INITIAL_ASYNC_PROCESS_STATE: AsyncProcessState = {
  isRequestPending: false,
  isRequestFetched: false,
  data: null,
  error: null
};

function useAsyncProcess<Data extends any>(options?: UseAsyncProcessOptions<Data>) {
  const {initialState, shouldResetDataWhenPending = true} = options || {};
  const [asyncState, setAsyncState] = useState<AsyncProcessState<Data>>(
    initialState || INITIAL_ASYNC_PROCESS_STATE
  );
  const latestDataRef = useRef(asyncState.data);
  const isUnmountedRef = useRef(false);
  const asyncStateSetter = useCallback<AsyncStateSetter<Data>>(
    (state) => (isUnmountedRef.current ? () => undefined : setAsyncState(state)),
    []
  );

  const runAsyncProcess: AsyncProcessCallBack<Data> = useCallback(
    (promise, responseSerializer) => {
      asyncStateSetter({
        isRequestPending: true,
        isRequestFetched: false,
        data: shouldResetDataWhenPending ? null : latestDataRef.current,
        error: null
      });

      promise
        .then((response) => {
          asyncStateSetter({
            isRequestPending: false,
            isRequestFetched: true,
            data: responseSerializer ? responseSerializer(response) : response,
            error: null
          });
        })
        .catch((error) => {
          asyncStateSetter({
            isRequestPending: false,
            isRequestFetched: true,
            data: null,
            error
          });
        });

      return promise;
    },
    [asyncStateSetter, shouldResetDataWhenPending]
  );

  useEffect(() => {
    latestDataRef.current = asyncState.data;
  }, [asyncState.data]);

  useOnUnmount(() => {
    isUnmountedRef.current = true;
  });

  return {
    state: asyncState,
    setState: asyncStateSetter,
    runAsyncProcess
  };
}

export default useAsyncProcess;
export {INITIAL_ASYNC_PROCESS_STATE};
