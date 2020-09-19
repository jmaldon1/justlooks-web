/**
 *
 * Carousel
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
    ImageWithZoom,
    Image,
    Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselArrow from 'components/CarouselArrow';

// import lazyLoadPlaceholderImage from '../../images/icon-512x512.png';

const CarouselCol = styled(Col)`
    position: relative;
    max-width: 600px;
    margin: auto auto auto 0;
    padding: 0;
`;

const StyledDot = styled(Dot)`
    // Fade in to full opacity when not selected.
    opacity: 1;
    transition: opacity 0.15s ease-out;
    -moz-transition: opacity 0.15s ease-out;
    -webkit-transition: opacity 0.15s ease-out;
    -o-transition: opacity 0.15s ease-out;

    &.carousel__dot--selected {
        // Fade out to half opacity when selected.
        opacity: 0.5;
        transition: opacity 0.15s ease-in;
        -moz-transition: opacity 0.15s ease-in;
        -webkit-transition: opacity 0.15s ease-in;
        -o-transition: opacity 0.15s ease-in;
    }
`;

const ThumbnailCol = styled(Col)`
    padding: 0;
    margin: 0 0 auto auto;
`;

const VerticallyAlignedButtonBack = styled(ButtonBack)`
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: none;
    outline: none !important;
    border: 0;
`;

const VerticallyAlignedButtonNext = styled(ButtonNext)`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: none;
    outline: none !important;
    border: 0;
`;

const StyledImage = styled(Image)`
    // max-height: 5em;
`;

function Carousel({ images }) {
    if (images.length === 0) return null;
    const orderedImages = [];
    images.forEach(image => {
        const { position } = image;
        orderedImages[position - 1] = image;
    });

    const carouselLeftArrowProps = {
        direction: 'left',
    };

    const carouselRightArrowProps = {
        direction: 'right',
    };

    return (
        <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={images.length}
            step={1}
            infinite
        >
            <Row>
                <ThumbnailCol xs={1}>
                    {orderedImages.map((image, idx) => {
                        const imageURL = image.url;
                        const ImageIntId = image.int_id;
                        return (
                            <StyledDot slide={idx} key={ImageIntId}>
                                <StyledImage src={imageURL} />
                            </StyledDot>
                        );
                    })}
                </ThumbnailCol>
                <CarouselCol xs={10}>
                    <Slider>
                        {orderedImages.map((image, idx) => {
                            const imageURL = image.url;
                            const ImageIntId = image.int_id;
                            return (
                                <Slide index={idx} key={ImageIntId}>
                                    <ImageWithZoom src={imageURL} />
                                </Slide>
                            );
                        })}
                    </Slider>
                    <VerticallyAlignedButtonBack>
                        <CarouselArrow {...carouselLeftArrowProps} />
                    </VerticallyAlignedButtonBack>
                    <VerticallyAlignedButtonNext>
                        <CarouselArrow {...carouselRightArrowProps} />
                    </VerticallyAlignedButtonNext>
                </CarouselCol>
            </Row>
        </CarouselProvider>
    );
}

Carousel.propTypes = {
    images: PropTypes.array,
};

export default memo(Carousel);
