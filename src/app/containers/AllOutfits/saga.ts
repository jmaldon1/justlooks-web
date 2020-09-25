import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { OutfitThumbnails } from './types';
import { request, JSONResponse } from 'utils/request';
import {
  selectLinkHeader,
  selectQueryParams,
  selectIsEachThumbnailShown,
} from './selectors';
import parse from 'parse-link-header';
import qs from 'qs';

function makeRequestURL(
  url: string,
  nextLink: parse.Link | null,
  queryParams?: object,
): URL {
  if (nextLink) return new URL(nextLink.url);
  const requestURL: URL = new URL(url, process.env.REACT_APP_BACKEND_HOST_URL);
  if (queryParams)
    requestURL.search = new URLSearchParams(
      Object.entries(queryParams),
    ).toString();
  return requestURL;
}

export function* getOutfitThumbnails() {
  const linkHeaders: parse.Links | null = yield select(selectLinkHeader);
  const nextLink: parse.Link | null = linkHeaders ? linkHeaders.next : null;
  const queryParams: qs.ParsedQs = yield select(selectQueryParams);
  const requestURL: URL = makeRequestURL(
    'api/outfit_thumbnails',
    nextLink,
    queryParams,
  );
  const resp: JSONResponse = yield call(request, requestURL.href);
  const outfitsThumbnails: OutfitThumbnails[] = resp.jsonResponse;
  const headers: { [header: string]: string } = resp.headers;
  const newLinkHeader: string | null = headers.link;
  const parsedNewLinkHeader: parse.Links | null = parse(newLinkHeader);
  const isEachThumbnailShown: boolean = yield select(
    selectIsEachThumbnailShown,
  );
  if (!isEachThumbnailShown) {
    yield put(actions.setLinkHeader(parsedNewLinkHeader));
    yield put(actions.loadOutfitThumbnailsSuccess(outfitsThumbnails));

    if (parsedNewLinkHeader == null) {
      yield select(selectIsEachThumbnailShown);
    }
  }
}

export function* allOutfitsSaga() {
  yield takeLatest(actions.loadOutfitThumbnails.type, getOutfitThumbnails);
}
