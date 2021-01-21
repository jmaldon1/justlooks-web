import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the OutfitPage container
export const initialState: ContainerState = {
  APIEndpoint: 'api/outfits',
  outfitId: null,
  loadingOutfit: false,
  outfit: null,
};

const outfitPageSlice = createSlice({
  name: 'outfitPage',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
    setOutfitId(state, action: PayloadAction<string>) {
      state.outfitId = action.payload;
    },
    loadOutfit(state) {
      state.loadingOutfit = true;
    },
    loadOutfitSuccess(state, action: PayloadAction<any>) {
      state.loadingOutfit = false;
      state.outfit = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = outfitPageSlice;
