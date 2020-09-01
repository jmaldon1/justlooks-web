/**
 *
 * ItemImage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import LazyLoad from 'react-lazyload'
import lazyLoadPlaceholderImage from '../../images/icon-512x512.png'

const LazyLoadPlaceholder = () => (
    <Figure.Image
        width={1024}
        height={1024}
        alt={`${1024}x${1024}`}
        src={lazyLoadPlaceholderImage}
    />
)

const ItemImage = ({ productThumbnail, productImageHeight, productImageWidth }) => {
    return (
        <ListGroup.Item>
            <Figure>
                <LazyLoad
                    height={100}
                    offset={[100, 0]}
                    debounce={200}
                    once
                    placeholder={<LazyLoadPlaceholder />}
                >
                    <Figure.Image
                        width={productImageWidth}
                        height={productImageHeight}
                        alt={`${productImageWidth}x${productImageWidth}`}
                        src={productThumbnail}
                    />
                    {/* <Figure.Caption>
                    Nulla vitae elit libero,
                    a pharetra augue mollis interdum.
                </Figure.Caption> */}
                </LazyLoad>
            </Figure>
        </ListGroup.Item>
    );
};

ItemImage.propTypes = {};

export default memo(ItemImage);
