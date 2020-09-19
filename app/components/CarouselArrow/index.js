/**
 *
 * CarouselArrow
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import messages from './messages';

const StyledFAICirle = styled(FontAwesomeIcon)`
    opacity: 0.5;
`;

const StyledSpan = styled.span`
    // Only apply this style if the arrow direction is right.
    ${({ direction }) => direction === 'right' && ` right: 225%; `}

    // Fade in the carousel arrow buttons on hover.
    &:hover ${StyledFAICirle} {
        opacity: 1;
        transition: opacity .15s ease-in;
        -moz-transition: opacity .15s ease-in;
        -webkit-transition: opacity .15s ease-in;
        -o-transition: opacity .15s ease-in;
    }
`;

function CarouselArrow({ direction }) {
    return (
        <StyledSpan direction={direction} className="fa-layers fa-fw">
            <StyledFAICirle icon="circle" size="4x" inverse />
            <FontAwesomeIcon
                icon={`chevron-${direction}`}
                size="4x"
                transform="shrink-4 right-3"
            />
        </StyledSpan>
    );
}

CarouselArrow.propTypes = {
    direction: PropTypes.string,
};

export default memo(CarouselArrow);
