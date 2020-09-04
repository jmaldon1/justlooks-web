/*
 *
 * OutfitsPage reducer
 *
 */
import produce from 'immer';
import {
    OUTFITS_LOADED_SUCCESS,
    SET_LINK_HEADER,
    SET_QUERY_PARAMS,
    SET_IS_EACH_THUMBNAIL_SHOWN,
} from './constants';

export const initialState = {
    queryParams: {
        int_id: 'gt.0',
        limit: 4,
    },
    outfits: [],
    linkHeader: {
        next: null,
        prev: null,
    },
    isEachThumbnailShown: false,
};

/* eslint-disable default-case, no-param-reassign */
const outfitsPageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case OUTFITS_LOADED_SUCCESS:
                draft.outfits = draft.outfits.concat(action.outfits);
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
            case SET_IS_EACH_THUMBNAIL_SHOWN:
                draft.isEachThumbnailShown = true;
                break;
        }
    });

export default outfitsPageReducer;
