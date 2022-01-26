interface AsyncProcessState<Data = any, Payload = any> {
  isRequestPending: boolean;
  isRequestFetched: boolean;
  data: Data | null;
  error:
    | (Error & {
        data: any;
        status: number;
      })
    | null;
  requestPayload?: Payload;
}

interface UseAsyncProcessOptions<Data = any> {
  initialState?: AsyncProcessState<Data>;
  shouldResetDataWhenPending?: boolean;
}

type AsyncProcessCallBack<Data extends any> = <Response extends Data>(
  promise: Promise<Response>,
  responseSerializer?: (response: Response) => Data
) => Promise<Response>;

type AsyncStateSetter<Data> = React.Dispatch<
  React.SetStateAction<AsyncProcessState<Data, any>>
>;
