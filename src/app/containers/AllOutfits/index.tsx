/**
 *
 * AllOutfits
 *
 */

import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import {
  selectAllOutfits,
  selectOutfitThumbnails,
  selectIsEachThumbnailShown,
  selectIsLoadingOutfitThumbnails,
} from './selectors';
import { allOutfitsSaga } from './saga';
import { AllOutfitsState, OutfitImage } from './types';
import qs from 'qs';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ThumbnailImage } from './components/ThumbnailImage';
import { LoadMoreButton } from './components/LoadMoreButton';

interface Props {}

export const AllOutfits = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: allOutfitsSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const allOutfits: AllOutfitsState = useSelector(selectAllOutfits);
  const outfitThumbnails: OutfitImage[] = useSelector(selectOutfitThumbnails);
  const isEachThumbnailShown: boolean = useSelector(selectIsEachThumbnailShown);
  const isLoadingOutfitThumbnails: boolean = useSelector(selectIsLoadingOutfitThumbnails);
  const loadedThumbnailLength: number = outfitThumbnails.length;

  console.log(allOutfits)
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    const locationSearch: string = location.search;
    if (locationSearch) {
      const queryParams: qs.ParsedQs = qs.parse(locationSearch, {
        ignoreQueryPrefix: true,
      });
      dispatch(actions.setQueryParams(queryParams));
    }

    dispatch(actions.loadOutfitThumbnails());
  });

  return (
    <>
      <Helmet>
        <title>AllOutfits</title>
        <meta name="description" content="Description of AllOutfits" />
      </Helmet>
      <br />
      <span>AllOutfits container</span>
      <Container>
        <Row>
          {outfitThumbnails.map(outfit => {
            const outfitID: string = outfit.outfit_id;

            return (
              /* Each column takes up
              50% space on xsmall devices (2 columns)
              33.33% space on medium devices (3 columns)
              25% space on large devices and up. (4 columns) */
              <Col xs={6} md={4} lg={3} key={outfitID}>
                <a href={`/outfit/${outfitID}`}>
                  <ThumbnailImage
                    thumbnailUrl={outfit.url}
                    imageHeight={outfit.height}
                    imageWidth={outfit.width}
                  />
                </a>
              </Col>
            );
          })}
        </Row>
        <LoadMoreButton
          isEachThumbnailShown={isEachThumbnailShown}
          loadedThumbnailLength={loadedThumbnailLength}
          isLoading={isLoadingOutfitThumbnails}
        />
      </Container>
    </>
  );
});

// const Div = styled.div``;
