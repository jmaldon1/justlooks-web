/**
 *
 * Asynchronously loads the component for LoadMoreButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const LoadMoreButton = lazyLoad(
  () => import('./index'),
  module => module.LoadMoreButton,
);
