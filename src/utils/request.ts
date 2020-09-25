export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

export interface JSONResponse {
  jsonResponse: any | any[];
  headers: { [header: string]: string };
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON and headers from the request
 */
async function parseJSONWithHeaders(
  response: Response,
): Promise<JSONResponse | null> {
  if (response.status === 204 || response.status === 205) {
    console.log('DO WE NEED THIS? 204 or 205 response happened.');
    return null;
  }

  return {
    jsonResponse: await response.json(),
    headers: Object.fromEntries(response.headers.entries()),
  };
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response): Response {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url         The url we want to request
 * @param  {object} [options]   The options we want to pass to "fetch"
 *
 * @return {object}             The response data
 */
export async function request(
  requestUrl: string,
  options?: RequestInit,
): Promise<JSONResponse | { err: ResponseError } | null> {
  const fetchResponse = await fetch(requestUrl, options);
  const response = checkStatus(fetchResponse);
  return parseJSONWithHeaders(response);
}
