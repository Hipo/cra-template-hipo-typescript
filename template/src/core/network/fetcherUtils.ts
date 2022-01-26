function fetchJSONMiddleware(response: globalThis.Response) {
  return response.json().catch((_error) => ({}));
}

export {fetchJSONMiddleware};
