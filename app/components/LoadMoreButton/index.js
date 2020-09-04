/**
 *
 * LoadMoreButton
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const CenteredDiv = styled.div`
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;
    justify-content: center;
`;

const LoadMoreButtonStyled = styled(Button)`
    width: 266px !important;
    // 'overflow-anchor: none' will prevent the page from scrolling
    // to the bottom when the Load More button is pressed.
    overflow-anchor: none;
`;

// const LoadMoreButton = ({ productsLength, fetchProducts }) => {
//     if (productsLength == 0) return null;
//     return (
//         <CenteredDiv>
//             <LoadMoreButtonStyled onClick={fetchProducts} size="lg" variant="outline-dark">
//                 Load More
//             </LoadMoreButtonStyled>
//         </CenteredDiv>
//     );
// };

const LoadMoreButton = ({
    loadedThumbnailLength,
    isEachThumbnailShown,
    fetchMore,
}) => {
    if (loadedThumbnailLength === 0 || isEachThumbnailShown) return null;
    return (
        <CenteredDiv>
            <LoadMoreButtonStyled
                onClick={fetchMore}
                size="lg"
                variant="outline-dark"
            >
                Load More
            </LoadMoreButtonStyled>
        </CenteredDiv>
    );
};

LoadMoreButton.propTypes = {
    loadedThumbnailLength: PropTypes.number,
    isEachThumbnailShown: PropTypes.bool,
    fetchMore: PropTypes.func,
};

export default memo(LoadMoreButton);
