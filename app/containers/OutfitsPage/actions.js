/*
 *
 * OutfitsPage actions
 *
 */

import {
    LOAD_OUTFITS,
    OUTFITS_LOADED_SUCCESS,
    SET_LINK_HEADER,
    SET_QUERY_PARAMS
} from './constants';

export function loadOutfits() {
    return {
        type: LOAD_OUTFITS,
    };
}

export function outfitsLoaded(products) {
    return {
        type: OUTFITS_LOADED_SUCCESS,
        products
    };
}

export function setLinkHeader(linkHeader) {
    return {
        type: SET_LINK_HEADER,
        linkHeader
    };
}

export function setQueryParams(queryParams) {
    return {
        type: SET_QUERY_PARAMS,
        queryParams
    };
}