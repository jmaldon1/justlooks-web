/**
 *
 * CarouselArrow
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

const FontAwesomeCircle = styled(FontAwesomeIcon)`
  opacity: 0.5;
`;

const Span = styled.span`
  /* Fade in the carousel arrow buttons on hover. */
  &:hover ${FontAwesomeCircle} {
    opacity: 1;
    transition: opacity 0.15s ease-in;
    -moz-transition: opacity 0.15s ease-in;
    -webkit-transition: opacity 0.15s ease-in;
    -o-transition: opacity 0.15s ease-in;
  }
`;

interface Props {
  direction: 'left' | 'right';
}

export const CarouselArrow = memo(({ direction }: Props) => {
  const icon: IconName =
    direction === 'left' ? 'chevron-left' : 'chevron-right';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <Span className="fa-layers fa-fw">
      <FontAwesomeCircle icon="circle" size="3x" inverse />
      <FontAwesomeIcon icon={icon} size="2x" transform="right-7" />
    </Span>
  );
});

// const Div = styled.div``;
