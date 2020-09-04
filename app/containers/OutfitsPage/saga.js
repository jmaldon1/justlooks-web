import { takeLatest, call, put, select } from 'redux-saga/effects';
import parse from 'parse-link-header';
// import qs from 'qs';
import request from 'utils/request';
import { LOAD_OUTFITS } from './constants';
import {
    makeSelectQueryParams,
    // makeSelectNextLink,
    makeSelectLinkHeader,
    makeSelectIsEachThumbnailShown,
} from './selectors';
import {
    outfitsLoaded,
    setLinkHeader,
    setIsEachThumbnailShown,
} from './actions';

function makeRequestURL(nextLink, queryParams) {
    if (nextLink) {
        return new URL(nextLink.url);
    }
    const requestURL = new URL('http://localhost:5000/api/outfit_thumbnails');
    requestURL.search = new URLSearchParams(queryParams).toString();
    return requestURL;
}

/**
 * Products request/response handler
 */
export function* getOutfits() {
    const linkHeaders = yield select(makeSelectLinkHeader());
    const nextLink = linkHeaders.next;
    const queryParams = yield select(makeSelectQueryParams());
    // const queryParamsString = qs.stringify(queryParams);
    const requestURL = makeRequestURL(nextLink, queryParams);

    try {
        // Call our request helper (see 'utils/request')
        const resp = yield call(request, requestURL);
        const outfitsThumbnails = resp.jsonResponse;
        // console.log(outfits)
        const { headers } = resp;
        const newLinkHeader = headers.link;
        // console.log(JSONWithHeaders)
        const parsedNewLinkHeader = parse(newLinkHeader);
        // console.log(parsedNewLinkHeader)
        const isEachThumbnailShown = yield select(
            makeSelectIsEachThumbnailShown(),
        );
        if (!isEachThumbnailShown) {
            yield put(setLinkHeader(parsedNewLinkHeader));
            yield put(outfitsLoaded(outfitsThumbnails));

            if (parsedNewLinkHeader == null) {
                yield put(setIsEachThumbnailShown());
            }
        }
    } catch (err) {
        console.log(err);
        //   yield put(repoLoadingError(err));
    }
}

// Individual exports for testing
export default function* outfitsPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(LOAD_OUTFITS, getOutfits);
}
