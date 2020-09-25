import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.outfitPage || initialState;

export const selectOutfitPage = createSelector(
  [selectDomain],
  outfitPageState => outfitPageState,
);
