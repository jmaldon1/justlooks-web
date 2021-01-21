import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, OutfitImage } from './types';
import parse from 'parse-link-header';

// The initial state of the AllOutfits container
export const initialState: ContainerState = {
  queryParams: {
    int_id: 'gt.0',
    limit: '4',
  },
  isLoadingOutfitThumbnails: false,
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
      state.isLoadingOutfitThumbnails = true;
    },
    loadOutfitThumbnailsSuccess(state, action: PayloadAction<OutfitImage[]>) {
      state.isLoadingOutfitThumbnails = false;
      state.outfitThumbnails = state.outfitThumbnails.concat(action.payload);
    },
    setIsEachThumbnailShown(state, action: PayloadAction<boolean>) {
      state.isEachThumbnailShown = action.payload;
    },
    setLinkHeader(state, action: PayloadAction<parse.Links | null>) {
      state.linkHeader = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = allOutfitsSlice;
