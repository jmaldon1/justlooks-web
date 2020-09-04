import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the productsPage state domain
 */

const selectProductsPageDomain = state => state.productsPage || initialState;

/**
 * Other specific selectors
 */

export const makeSelectQueryParams = () =>
    createSelector(
        selectProductsPageDomain,
        substate => substate.queryParams,
    );

export const makeSelectProducts = () =>
    createSelector(
        selectProductsPageDomain,
        substate => substate.products,
    );

// export const makeSelectNextLink = () =>
//     createSelector(
//         selectProductsPageDomain,
//         substate => substate.nextLink,
//     );

export const makeSelectLinkHeader = () =>
    createSelector(
        selectProductsPageDomain,
        substate => substate.linkHeader,
    );

/**
 * Default selector used by ProductsPage
 */

const makeSelectProductsPage = () =>
    createSelector(
        selectProductsPageDomain,
        substate => substate,
    );

export default makeSelectProductsPage;
export { selectProductsPageDomain };
