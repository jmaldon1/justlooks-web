/*
 *
 * OutfitsPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION } from './constants';

export const initialState = {
    "queryParams": {
        "int_id": "gt.0",
        "limit": 4,
    },
    "outfits": [],
    "linkHeader": {
        "next": null,
        "prev": null,
    }
};

/* eslint-disable default-case, no-param-reassign */
const outfitsPageReducer = (state = initialState, action) =>
    produce(state, (/* draft */) => {
        switch (action.type) {
            case OUTFITS_LOADED_SUCCESS:
                draft.outfits = draft.outfits.concat(action.outfits);
                break;
            case SET_LINK_HEADER:
                draft.linkHeader = {...draft.linkHeader, ...action.linkHeader}
                break;
            case SET_QUERY_PARAMS:
                draft.queryParams = {...draft.queryParams, ...action.queryParams}
                break;
        }
    });

export default outfitsPageReducer;
