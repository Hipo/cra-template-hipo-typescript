function fetchJSONMiddleware(response: globalThis.Response) {
    return response.json().catch((_error) => ({}));
  }
  
  function stringifyJSON(value: any) {
    return JSON.stringify(value);
  }
  
  export {fetchJSONMiddleware, stringifyJSON};
  