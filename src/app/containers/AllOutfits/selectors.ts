import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.allOutfits || initialState;

export const selectAllOutfits = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState,
);

export const selectLinkHeader = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.linkHeader,
);

export const selectQueryParams = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.queryParams,
);

export const selectIsEachThumbnailShown = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.isEachThumbnailShown,
);

export const selectIsLoadingOutfitThumbnails = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.isLoadingOutfitThumbnails,
);

export const selectOutfitThumbnails = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.outfitThumbnails,
);
