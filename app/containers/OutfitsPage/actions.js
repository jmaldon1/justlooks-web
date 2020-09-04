/*
 *
 * OutfitsPage actions
 *
 */

import {
    DEFAULT_ACTION,
    LOAD_OUTFITS,
    OUTFITS_LOADED_SUCCESS,
    SET_LINK_HEADER,
    SET_QUERY_PARAMS,
    SET_IS_EACH_THUMBNAIL_SHOWN,
} from './constants';

export function defaultAction() {
    return {
        type: DEFAULT_ACTION,
    };
}

export function loadOutfits() {
    return {
        type: LOAD_OUTFITS,
    };
}

export function outfitsLoaded(outfits) {
    return {
        type: OUTFITS_LOADED_SUCCESS,
        outfits,
    };
}

export function setLinkHeader(linkHeader) {
    return {
        type: SET_LINK_HEADER,
        linkHeader,
    };
}

export function setQueryParams(queryParams) {
    return {
        type: SET_QUERY_PARAMS,
        queryParams,
    };
}

export function setIsEachThumbnailShown() {
    return {
        type: SET_IS_EACH_THUMBNAIL_SHOWN,
    };
}
