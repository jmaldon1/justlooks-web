import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the outfitsPage state domain
 */

const selectOutfitsPageDomain = state => state.outfitsPage || initialState;

/**
 * Other specific selectors
 */

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
