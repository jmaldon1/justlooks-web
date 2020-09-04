/*
 *
 * ProductsPage actions
 *
 */

import {
    DEFAULT_ACTION,
    LOAD_PRODUCTS,
    PRODUCTS_LOADED_SUCCESS,
    SET_LINK_HEADER,
    SET_QUERY_PARAMS,
} from './constants';

export function defaultAction() {
    return {
        type: DEFAULT_ACTION,
    };
}

export function loadProducts() {
    return {
        type: LOAD_PRODUCTS,
    };
}

export function productsLoaded(products) {
    return {
        type: PRODUCTS_LOADED_SUCCESS,
        products,
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
