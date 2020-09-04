// import url from 'url';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON and headers from the request
 */
function parseJSONWithHeaders(response) {
    if (response.status === 204 || response.status === 205) {
        return null;
    }
    return response.json().then(json => ({
        jsonResponse: json,
        headers: Object.fromEntries(response.headers.entries()),
    }));
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url        The url we want to request
 * @param  {object} [options]   The options we want to pass to "fetch"
 *
 * @return {object}             The response data
 */
export default function request(requestUrl, options) {
    // const proxy = "http://localhost:5000"
    // const requestURL = url.resolve(proxy, path)
    return fetch(requestUrl, options)
        .then(checkStatus)
        .then(parseJSONWithHeaders);
}
