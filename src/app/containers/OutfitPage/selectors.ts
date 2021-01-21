import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.outfitPage || initialState;

export const selectOutfitPage = createSelector(
  [selectDomain],
  outfitPageState => outfitPageState,
);

export const selectAPIEndpoint = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.APIEndpoint,
);

export const selectOutfitId = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.outfitId,
);

export const selectOutfit = createSelector(
  [selectDomain],
  allOutfitsState => allOutfitsState.outfit,
);
