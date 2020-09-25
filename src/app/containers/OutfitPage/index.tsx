/**
 *
 * OutfitPage
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectOutfitPage } from './selectors';
import { outfitPageSaga } from './saga';

interface Props {}

export const OutfitPage = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: outfitPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const outfitPage = useSelector(selectOutfitPage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>OutfitPage</title>
        <meta name="description" content="Description of OutfitPage" />
      </Helmet>
      <span>AllOutfits container</span>
      <Div>{t('')}</Div>
    </>
  );
});

const Div = styled.div``;
