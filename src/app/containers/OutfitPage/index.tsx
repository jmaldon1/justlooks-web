/**
 *
 * OutfitPage
 *
 */

import React, { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey, actions } from './slice';
import { Outfit, Product } from './types';
import { OutfitImage } from '../AllOutfits/types';
import { selectOutfitPage, selectOutfit } from './selectors';
import { outfitPageSaga } from './saga';
import { Carousel } from './components/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {}

interface ParamTypes {
  outfitId: string;
}

export const OutfitPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: outfitPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const outfitPage = useSelector(selectOutfitPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const { outfitId } = useParams<ParamTypes>();

  const useEffectOnMount = (effect: React.EffectCallback) => {
    useEffect(effect, []);
  };
  useEffectOnMount(() => {
    dispatch(actions.setOutfitId(outfitId));
    dispatch(actions.loadOutfit());
  });

  const outfit: Outfit | null = useSelector(selectOutfit);
  const outfitImages: OutfitImage[] = outfit ? outfit.images : [];
  // const outfitProducts: Product[] = outfit ? outfit.products : [];

  return (
    <>
      <Helmet>
        <title>OutfitPage</title>
        <meta name="description" content="Description of OutfitPage" />
      </Helmet>
      <span>OutfitPage container</span>
      <Div>{t('')}</Div>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Carousel images={outfitImages} />
          </Col>
          test
          <Col />
        </Row>
      </Container>
    </>
  );
});

const Div = styled.div``;
