/**
 *
 * Asynchronously loads the component for OutfitPage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const OutfitPage = lazyLoad(
  () => import('./index'),
  module => module.OutfitPage,
);
