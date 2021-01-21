/**
 *
 * Asynchronously loads the component for CarouselArrow
 *
 */

import { lazyLoad } from 'utils/loadable';

export const CarouselArrow = lazyLoad(
  () => import('./index'),
  module => module.CarouselArrow,
);
