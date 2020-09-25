import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, OutfitThumbnails } from './types';
import parse from 'parse-link-header';

// The initial state of the AllOutfits container
export const initialState: ContainerState = {
  queryParams: {
    int_id: 'gt.0',
    limit: '4',
  },
  outfitThumbnails: [],
  linkHeader: null,
  isEachThumbnailShown: false,
};

const allOutfitsSlice = createSlice({
  name: 'allOutfits',
  initialState,
  reducers: {
    // someAction(state, action: PayloadAction<any>) {},
    setQueryParams(state, action: PayloadAction<qs.ParsedQs>) {
      state.queryParams = {
        ...state.queryParams,
        ...action.payload,
      };
    },
    loadOutfitThumbnails(state) {
      state.outfitThumbnails = [];
    },
    loadOutfitThumbnailsSuccess(
      state,
      action: PayloadAction<OutfitThumbnails[]>,
    ) {
      state.outfitThumbnails = state.outfitThumbnails.concat(action.payload);
    },
    setLinkHeader(state, action: PayloadAction<parse.Links | null>) {
      state.linkHeader = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = allOutfitsSlice;
