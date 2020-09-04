import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the outfitsPage state domain
 */

const selectOutfitsPageDomain = state => state.outfitsPage || initialState;

/**
 * Other specific selectors
 */

export const makeSelectQueryParams = () =>
    createSelector(
        selectOutfitsPageDomain,
        substate => substate.queryParams,
    );

export const makeSelectOutfits = () =>
    createSelector(
        selectOutfitsPageDomain,
        substate => substate.outfits,
    );

export const makeSelectLinkHeader = () =>
    createSelector(
        selectOutfitsPageDomain,
        substate => substate.linkHeader,
    );

export const makeSelectIsEachThumbnailShown = () =>
    createSelector(
        selectOutfitsPageDomain,
        substate => substate.isEachThumbnailShown,
    );

/**
 * Default selector used by OutfitsPage
 */

const makeSelectOutfitsPage = () =>
    createSelector(
        selectOutfitsPageDomain,
        substate => substate,
    );

export default makeSelectOutfitsPage;
export { selectOutfitsPageDomain };
