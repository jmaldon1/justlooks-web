/*
 *
 * OutfitPage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, LOAD_OUTFIT, LOAD_OUTFIT_SUCCESS } from './constants';

export const initialState = {
    outfitId: null,
    outfitData: null,
};

/* eslint-disable default-case, no-param-reassign */
const outfitPageReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case DEFAULT_ACTION:
                break;
            case LOAD_OUTFIT:
                draft.outfitId = action.outfitId;
                break;
            case LOAD_OUTFIT_SUCCESS:
                draft.outfitData = action.outfitData;
                break;
        }
    });

export default outfitPageReducer;
