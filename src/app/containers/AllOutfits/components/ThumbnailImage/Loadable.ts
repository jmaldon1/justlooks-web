/**
 *
 * Asynchronously loads the component for ThumbnailImage
 *
 */

import { lazyLoad } from 'utils/loadable';

export const ThumbnailImage = lazyLoad(
  () => import('./index'),
  module => module.ThumbnailImage,
);
