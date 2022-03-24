interface ListRequestResponse<Result> {
  count: number;
  next: null | string;
  previous: null | string;
  results: Result[];
}

type ListRequestParams<Ordering = string> = Partial<{
  ordering: Ordering;
  limit: "all" | number;
  offset: number;
  search: string;
}>;

interface HipoApiErrorShape {
  type: string;
  detail: Record<string, undefined | any>;
  fallback_message: string;
}
