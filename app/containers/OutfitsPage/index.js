/**
 *
 * OutfitsPage
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
import LoadMoreButton from 'components/LoadMoreButton';
import ThumbnailGridList from 'components/ThumbnailGridList';
import qs from 'qs';

import {
    // eslint-disable-next-line import/no-named-default
    default as makeSelectOutfitsPage,
    makeSelectOutfits,
    makeSelectIsEachThumbnailShown,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { loadOutfits, setQueryParams } from './actions';

export function OutfitsPage({
    // outfitsPage,
    location, // location is passed in from react-router-dom
    fetchOutfits,
    setQParams,
    outfits,
    isEachThumbnailShown,
}) {
    useInjectReducer({ key: 'outfitsPage', reducer });
    useInjectSaga({ key: 'outfitsPage', saga });

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
        fetchOutfits();
        // console.log(products)
    }, []);
    // console.log(outfitsPage);

    const gridListProps = {
        outfits,
    };

    const loadMoreButtonProps = {
        loadedThumbnailLength: outfits.length,
        isEachThumbnailShown,
        fetchMore: fetchOutfits,
    };

    return (
        <div>
            <Helmet>
                <title>OutfitsPage</title>
                <meta name="description" content="Description of OutfitsPage" />
            </Helmet>
            <FormattedMessage {...messages.header} />
            <ThumbnailGridList {...gridListProps} />
            <LoadMoreButton {...loadMoreButtonProps} />
        </div>
    );
}

OutfitsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    outfitsPage: PropTypes.object,
    location: PropTypes.string,
    fetchOutfits: PropTypes.func,
    setQParams: PropTypes.func,
    outfits: PropTypes.array,
    isEachThumbnailShown: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
    outfitsPage: makeSelectOutfitsPage(),
    outfits: makeSelectOutfits(),
    isEachThumbnailShown: makeSelectIsEachThumbnailShown(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        fetchOutfits: () => {
            dispatch(loadOutfits());
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
)(OutfitsPage);
