import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the outfitPage state domain
 */

const selectOutfitPageDomain = state => state.outfitPage || initialState;

/**
 * Other specific selectors
 */

export const makeSelectOutfitId = () =>
    createSelector(
        selectOutfitPageDomain,
        substate => substate.outfitId,
    );

export const makeSelectOutfitData = () =>
    createSelector(
        selectOutfitPageDomain,
        substate => substate.outfitData,
    );

/**
 * Default selector used by OutfitPage
 */

const makeSelectOutfitPage = () =>
    createSelector(
        selectOutfitPageDomain,
        substate => substate,
    );

export default makeSelectOutfitPage;
export { selectOutfitPageDomain };
