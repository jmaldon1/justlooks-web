// import { take, call, put, select } from 'redux-saga/effects';


/**
 * Products request/response handler
 */
export function* getOutfits() {
    const linkHeaders = yield select(makeSelectLinkHeader());
    const nextLink = linkHeaders["next"]
    const queryParams = yield select(makeSelectQueryParams());
    const queryParamsString = qs.stringify(queryParams);
    // If there is no next link, use a default link
    const requestURL = (!nextLink) ? `http://localhost:5000/api/products?${queryParamsString}` : nextLink["url"]

    try {
        // Call our request helper (see 'utils/request')
        const JSONWithHeaders = yield call(request, requestURL);
        const products = JSONWithHeaders["jsonResponse"];
        const headers = JSONWithHeaders["headers"];
        const newLinkHeader = headers["link"];
        console.log(JSONWithHeaders)
        const parsedNewLinkHeader =  parse(newLinkHeader)
        // https://github.com/twobin/react-lazyload
        // https://www.freecodecamp.org/news/how-to-optimize-react-applications-with-lazy-loading-232183e02768/
        // https://github.com/ljharb/qs
        yield put(setLinkHeader(parsedNewLinkHeader));
        yield put(productsLoaded(products));
    } catch (err) {
        console.log(err)
        //   yield put(repoLoadingError(err));
    }
}


// Individual exports for testing
export default function* outfitsPageSaga() {
    // See example in containers/HomePage/saga.js
}
