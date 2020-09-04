/*
 *
 * ProductsPage reducer
 *
 */
import produce from 'immer';
import {
    PRODUCTS_LOADED_SUCCESS,
    SET_LINK_HEADER,
    SET_QUERY_PARAMS,
} from './constants';

export const initialState = {
    queryParams: {
        int_id: 'gt.0',
        limit: 50,
    },
    products: [],
    nextLink: null,
    linkHeader: {
        next: null,
        prev: null,
    },
};

/* eslint-disable default-case, no-param-reassign */
const productsPageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case PRODUCTS_LOADED_SUCCESS:
                draft.products = draft.products.concat(action.products);
                break;
            case SET_LINK_HEADER:
                draft.linkHeader = {
                    ...draft.linkHeader,
                    ...action.linkHeader,
                };
                break;
            case SET_QUERY_PARAMS:
                draft.queryParams = {
                    ...draft.queryParams,
                    ...action.queryParams,
                };
                break;
        }
    });

export default productsPageReducer;
