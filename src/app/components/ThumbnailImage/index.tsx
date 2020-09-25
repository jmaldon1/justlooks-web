/**
 *
 * ThumbnailImage
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import Figure from 'react-bootstrap/Figure';
import LazyLoad from 'react-lazyload';
import lazyLoadPlaceholderImage from 'images/logo512.png';

interface Props {
  imageWidth: number;
  imageHeight: number;
  thumbnailUrl: string;
}

export const ThumbnailImage = memo(
  ({ imageWidth, imageHeight, thumbnailUrl }: Props) => {
    // // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const { t, i18n } = useTranslation();

    // return <Div>{t('')}</Div>;
    return (
      <Figure>
        <LazyLoad
          height={100}
          offset={[100, 0]}
          debounce={200}
          once
          placeholder={<LazyLoadPlaceholder />}
        >
          <Figure.Image
            thumbnail
            width={imageWidth}
            height={imageHeight}
            alt={`${imageHeight}x${imageWidth}`}
            src={thumbnailUrl}
          />
          {/* <Figure.Caption>
                  Nulla vitae elit libero,
                  a pharetra augue mollis interdum.
              </Figure.Caption> */}
        </LazyLoad>
      </Figure>
    );
  },
);

const LazyLoadPlaceholder = () => (
  <Figure.Image
    width={1024}
    height={1024}
    alt={`${1024}x${1024}`}
    src={lazyLoadPlaceholderImage}
  />
);
