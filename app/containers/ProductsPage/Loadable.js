/**
 *
 * Asynchronously loads the component for ProductsPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
