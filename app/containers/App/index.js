/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
// import ProductsPage from 'containers/ProductsPage/Loadable';
import OutfitsPage from 'containers/OutfitsPage/Loadable';
import OutfitPage from 'containers/OutfitPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route exact path="/" component={OutfitsPage} />
                <Route exact path="/outfit/:outfitId" component={OutfitPage} />
                {/* <Route exact path="/products" component={ProductsPage} /> */}
                <Route component={NotFoundPage} />
            </Switch>
            <GlobalStyle />
        </div>
    );
}
