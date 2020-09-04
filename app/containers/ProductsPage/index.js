/**
 *
 * ProductsPage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
// https://stackoverflow.com/questions/33611812/export-const-vs-export-default-in-es6
// import history from 'utils/history';
import qs from 'qs';
// import styled from 'styled-components';
import LoadMoreButton from 'components/LoadMoreButton';
import ThumbnailGridList from 'components/ThumbnailGridList';
import {
    // eslint-disable-next-line import/no-named-default
    default as makeSelectProductsPage,
    makeSelectProducts,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadProducts, setQueryParams } from './actions';
// import * as R from 'ramda'

export function ProductsPage({
    fetchProducts,
    location, // location is passed in from react-router-dom
    products,
    setQParams,
}) {
    useInjectReducer({ key: 'productsPage', reducer });
    useInjectSaga({ key: 'productsPage', saga });

    useEffect(() => {
        const locationSearch = location.search;

        if (locationSearch) {
            const locationSearchQueryBeginRemoved = locationSearch.replace(
                '?',
                '',
            );
            const queryParams = qs.parse(locationSearchQueryBeginRemoved);
            setQParams(queryParams);
        }
        fetchProducts();
        // console.log(products)
    }, []);

    const loadMoreButtonProps = {
        productsLength: products.length,
        fetchProducts,
    };

    const gridListProps = {
        products,
    };

    return (
        <article>
            <Helmet>
                <title>ProductsPage</title>
                <meta
                    name="description"
                    content="Description of ProductsPage"
                />
            </Helmet>
            <FormattedMessage {...messages.header} />
            <ThumbnailGridList {...gridListProps} />
            <LoadMoreButton {...loadMoreButtonProps} />
        </article>
    );
}

ProductsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    fetchProducts: PropTypes.func,
    location: PropTypes.string,
    products: PropTypes.array,
    setQParams: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
    productsPage: makeSelectProductsPage(),
    products: makeSelectProducts(),
});

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => {
            dispatch(loadProducts());
        },
        setQParams: queryParams => {
            dispatch(setQueryParams(queryParams));
        },
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(ProductsPage);
