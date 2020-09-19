/*
 *
 * OutfitPage actions
 *
 */

import { DEFAULT_ACTION, LOAD_OUTFIT, LOAD_OUTFIT_SUCCESS } from './constants';

export function defaultAction() {
    return {
        type: DEFAULT_ACTION,
    };
}

export function loadOutfit(outfitId) {
    return {
        type: LOAD_OUTFIT,
        outfitId,
    };
}

export function loadOutfitSuccess(outfitData) {
    return {
        type: LOAD_OUTFIT_SUCCESS,
        outfitData,
    };
}
