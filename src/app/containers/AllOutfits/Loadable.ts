/**
 *
 * Asynchronously loads the component for AllOutfits
 *
 */

import { lazyLoad } from 'utils/loadable';

export const AllOutfits = lazyLoad(
  () => import('./index'),
  module => module.AllOutfits,
);
