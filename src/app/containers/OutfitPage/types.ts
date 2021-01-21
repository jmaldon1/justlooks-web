import { OutfitImage } from 'app/containers/AllOutfits/types';

/* --- STATE --- */
export interface OutfitPageState {
  APIEndpoint: string;
  outfitId: string | null;
  loadingOutfit: boolean;
  outfit: Outfit | null;
}

export type ContainerState = OutfitPageState;

export interface ProductVariant {
  available: boolean;
  compare_at_price: string;
  created_date: string;
  ims_id: number;
  ims_uid: string;
  ims_variant_id: number;
  ims_variant_uid: string;
  int_id: number;
  last_updated: string;
  modified_date: string;
  price: string;
  product_id: string;
  size: string;
  variant_id: string;
  width: string | null;
}

export interface ProductImage {
  created_date: string;
  height: number;
  image_id: string;
  image_url: string;
  ims_id: number;
  ims_image_id: number;
  ims_image_uid: string;
  ims_uid: string;
  int_id: number;
  last_updated: string;
  modified_date: string;
  position: number;
  product_id: string;
  width: number;
}

export interface Product {
  available: boolean;
  base_color: string;
  brand: string;
  brand_handle: string;
  category: string | null;
  color: string;
  corpus: string[];
  created_date: string;
  fit: string;
  gender: string;
  images: ProductImage[];
  ims: string;
  ims_id: number;
  ims_uid: string;
  int_id: number;
  last_updated: string;
  material: string;
  modified_date: string;
  name: string;
  occasion: string;
  product_features: string[];
  product_id: string;
  product_url: string;
  published: boolean;
  style: string;
  variant: ProductVariant[];
  waist_rise: string | null;
}

export interface Outfit {
  created_date: string;
  images: OutfitImage[];
  int_id: number;
  max_images: number;
  modified_date: string;
  outfit_id: string;
  products: Product[];
  season: string;
  stylist: string;
}
