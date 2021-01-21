import parse from 'parse-link-header';
import qs from 'qs';

/* --- STATE --- */
export interface AllOutfitsState {
  queryParams: qs.ParsedQs;
  isLoadingOutfitThumbnails: boolean;
  outfitThumbnails: OutfitImage[];
  linkHeader: parse.Links | null;
  isEachThumbnailShown: boolean;
}

export type ContainerState = AllOutfitsState;

export interface OutfitImage {
  int_id: number;
  outfit_id: string;
  position: number;
  url: string;
  height: number;
  width: number;
  created_date: string;
  modified_date: string;
}
