import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_OUTFIT } from './constants';
import { makeSelectOutfitId } from './selectors';
import { loadOutfitSuccess } from './actions';

/**
 * Products request/response handler
 */
export function* getOutfit() {
    try {
        const requestURL = new URL('http://localhost:5000/api/outfits');
        const outfitId = yield select(makeSelectOutfitId());
        const queryParams = {
            outfit_id: `eq.${outfitId}`,
        };
        requestURL.search = new URLSearchParams(queryParams).toString();
        const requestOptions = {
            headers: {
                // Send back the response unenclosed by an array.
                Accept: 'application/vnd.pgrst.object+json',
            },
        };
        // Call our request helper (see 'utils/request')
        const resp = yield call(request, requestURL, requestOptions);
        // console.log(resp);
        const outfitData = resp.jsonResponse;
        yield put(loadOutfitSuccess(outfitData));
    } catch (err) {
        console.log(err);
        //   yield put(repoLoadingError(err));
    }
}

// Individual exports for testing
export default function* outfitPageSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(LOAD_OUTFIT, getOutfit);
}
