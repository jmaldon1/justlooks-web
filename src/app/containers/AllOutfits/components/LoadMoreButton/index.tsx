/**
 *
 * LoadMoreButton
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { actions } from '../../slice';

import Button from 'react-bootstrap/Button';

interface Props {
  isLoading: boolean;
  isEachThumbnailShown: boolean;
  loadedThumbnailLength: number;
}

export const LoadMoreButton = memo(
  ({ isLoading, isEachThumbnailShown, loadedThumbnailLength }: Props) => {
    if (loadedThumbnailLength === 0 || isEachThumbnailShown) return null;
    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { t, i18n } = useTranslation();

    const onClickLoadMore = () => {
      dispatch(actions.loadOutfitThumbnails());
    };
    // return <Div>{t('')}</Div>;
    return (
      <Div>
        <LoadMoreButtonStyled
          onClick={!isLoading ? onClickLoadMore : null}
          size="lg"
          variant="outline-dark"
          disabled={isLoading}
        >
          {isLoading ? 'Loading…' : 'Load More'}
        </LoadMoreButtonStyled>
      </Div>
    );
  },
);

const Div = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  display: flex;
  justify-content: center;
`;

const LoadMoreButtonStyled = styled(Button)`
  width: 266px !important;
  /* 'overflow-anchor: none' will prevent the page from scrolling
    to the bottom when the Load More button is pressed. */
  overflow-anchor: none;
`;
