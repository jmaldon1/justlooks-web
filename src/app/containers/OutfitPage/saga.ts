import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { Outfit } from './types';
import { selectAPIEndpoint, selectOutfitId } from './selectors';
import { request, JSONResponse } from 'utils/request';

/**
 * Products request/response handler
 */
export function* getOutfit() {
  try {
    const APIEndpoint: string = yield select(selectAPIEndpoint);
    const requestURL: URL = new URL(
      APIEndpoint,
      process.env.REACT_APP_BACKEND_HOST_URL,
    );
    const outfitId: string = yield select(selectOutfitId);
    const queryParams: { outfit_id: string } = {
      outfit_id: `eq.${outfitId}`,
    };

    requestURL.search = new URLSearchParams(queryParams).toString();
    const requestOptions: { headers: { Accept: string } } = {
      headers: {
        // Send back the response unenclosed by an array.
        Accept: 'application/vnd.pgrst.object+json',
      },
    };
    // Call our request helper (see 'utils/request')
    const resp: JSONResponse = yield call(
      request,
      requestURL.href,
      requestOptions,
    );
    /* NOTE: Typescript does not type check at runtime.
    So if we want to verify types of the response, we need to make a
    function that will do the type checking for us. */
    const outfitData: Outfit = resp.jsonResponse as Outfit;
    yield put(actions.loadOutfitSuccess(outfitData));
  } catch {}
}

export function* outfitPageSaga() {
  yield takeLatest(actions.loadOutfit.type, getOutfit);
}
