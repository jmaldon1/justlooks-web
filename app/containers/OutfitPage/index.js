/**
 *
 * OutfitPage
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'components/Carousel';
import {
    // eslint-disable-next-line import/no-named-default
    default as makeSelectOutfitPage,
    makeSelectOutfitData,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import { loadOutfit } from './actions';

export function OutfitPage({
    // outfitPage,
    match,
    fetchOutfit,
    outfitData,
}) {
    useInjectReducer({ key: 'outfitPage', reducer });
    useInjectSaga({ key: 'outfitPage', saga });

    useEffect(() => {
        const { outfitId } = match.params;
        fetchOutfit(outfitId);
    }, []);

    const carouselProps = {
        images: outfitData ? outfitData.images : [],
    };

    const products = outfitData ? outfitData.products : [];

    return (
        <div>
            <Helmet>
                <title>OutfitPage</title>
                <meta name="description" content="Description of OutfitPage" />
            </Helmet>
            <FormattedMessage {...messages.header} />
            <Container>
                <Row>
                    <Col lg={8}>
                        <Carousel {...carouselProps} />
                    </Col>
                    <Col lg={4}>
                        <ul>
                            {products.map(product => {
                                const outfitIntId = product.int_id;
                                const productType = product.product_type;
                                const productURL = product.product_url;
                                return (
                                    <li key={outfitIntId}>
                                        {productType}
                                        <ul>
                                            <li>
                                                <a href={productURL}>
                                                    {productURL}
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

OutfitPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object,
    fetchOutfit: PropTypes.func,
    outfitData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
    outfitPage: makeSelectOutfitPage(),
    outfitData: makeSelectOutfitData(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
        fetchOutfit: outfitId => {
            dispatch(loadOutfit(outfitId));
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
)(OutfitPage);
