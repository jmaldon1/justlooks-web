/**
 *
 * Carousel
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';

import lazyLoadPlaceholderImage from 'images/logo512.png';
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
import { CarouselArrow } from '../CarouselArrow';
import { OutfitImage } from 'app/containers/AllOutfits/types';

const VerticallyAlignedBackButton = styled(ButtonBack)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  background: none;
  outline: none !important;
  border: 0;
`;

const VerticallyAlignedNextButton = styled(ButtonNext)`
  position: absolute;
  top: 50%;
  right: 45px;
  transform: translateY(-50%);
  background: none;
  outline: none !important;
  border: 0;
`;

const ThumbnailCol = styled(Col)`
  padding: 0;
  margin: 0 0 auto auto;
`;

const StyledDot = styled(Dot)`
  /* Fade in to full opacity when not selected. */
  opacity: 1;
  transition: opacity 0.15s ease-out;
  -moz-transition: opacity 0.15s ease-out;
  -webkit-transition: opacity 0.15s ease-out;
  -o-transition: opacity 0.15s ease-out;

  &.carousel__dot--selected {
    /* Fade out to half opacity when selected. */
    opacity: 0.5;
    transition: opacity 0.15s ease-in;
    -moz-transition: opacity 0.15s ease-in;
    -webkit-transition: opacity 0.15s ease-in;
    -o-transition: opacity 0.15s ease-in;
  }
`;

interface Props {
  images: OutfitImage[];
}

export const Carousel = memo(({ images }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  // console.log(images);
  const orderedImages: OutfitImage[] = [];
  images.forEach(image => {
    const { position } = image;
    orderedImages[position - 1] = image;
  });

  // return <Div>{t('')}</Div>;
  return (
    <Div>
      <CarouselProvider
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        totalSlides={orderedImages.length}
        step={1}
        infinite
      >
        <Row>
          <ThumbnailCol xs={1}>
            {/* <StyledDot slide={0} key={0}>
              <Image hasMasterSpinner src={lazyLoadPlaceholderImage} />
            </StyledDot>
            <StyledDot slide={1} key={1}>
              <Image hasMasterSpinner src={lazyLoadPlaceholderImage} />
            </StyledDot> */}
            {orderedImages.map((image, idx) => {
              const imageURL = image.url;
              const intId = image.int_id;
              return (
                <StyledDot slide={idx} key={intId}>
                  <Image hasMasterSpinner src={imageURL} />
                </StyledDot>
              );
            })}
          </ThumbnailCol>
          <Col xs={11}>
            <Slider>
              {/* <Slide index={0} key={0}>
                <ImageWithZoom src={lazyLoadPlaceholderImage} />
              </Slide>
              <Slide index={1} key={1}>
                <ImageWithZoom src={lazyLoadPlaceholderImage} />
              </Slide> */}
              {orderedImages.map((image, idx) => {
                const imageURL = image.url;
                const intId = image.int_id;
                return (
                  <Slide index={idx} key={intId}>
                    <ImageWithZoom src={imageURL} />
                  </Slide>
                );
              })}
            </Slider>
            {[1, 0].indexOf(orderedImages.length) !== -1 ? null : (
              /* If length of images is equal to 0 or 1, don't show arrows. */
              <>
                <VerticallyAlignedBackButton>
                  <CarouselArrow direction="left" />
                </VerticallyAlignedBackButton>
                <VerticallyAlignedNextButton>
                  <CarouselArrow direction="right" />
                </VerticallyAlignedNextButton>
              </>
            )}
            {/* <VerticallyAlignedBackButton>
              <CarouselArrow direction="left" />
            </VerticallyAlignedBackButton>
            <VerticallyAlignedNextButton>
              <CarouselArrow direction="right" />
            </VerticallyAlignedNextButton> */}
          </Col>
        </Row>
      </CarouselProvider>
    </Div>
  );
});

const Div = styled.div`
  position: relative;
  max-width: 800px;
  margin: auto;
`;
