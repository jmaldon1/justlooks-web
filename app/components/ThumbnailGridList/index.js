/**
 *
 * ThumbnailGridList
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

import ListGroup from 'react-bootstrap/ListGroup';
import ThumbnailImage from '../ThumbnailImage';

const GridListGroup = styled(ListGroup)`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1em;
`;

// const ThumbnailGridList = ({ products }) => (
//     <GridListGroup horizontal={"lg"} >
//         {products.map((product, idx) => {
//             const productImageProps = {
//                 productThumbnail: product["images"][0]["image_url"],
//                 productImageHeight: product["images"][0]["height"],
//                 productImageWidth: product["images"][0]["width"],
//             }

//             return (
//                 <ThumbnailImage key={product.product_id} {...productImageProps} />
//             )
//         })}
//     </GridListGroup>
// );

const ThumbnailGridList = ({ outfits }) => (
    <GridListGroup horizontal="lg">
        {outfits.map(outfit => {
            const outfitID = outfit.outfit_id;
            const outfitThumbnailProps = {
                thumbnailUrl: outfit.url,
                imageHeight: outfit.height,
                imageWidth: outfit.width,
            };

            return (
                <a href={`/outfit/${outfitID}`} key={outfitID}>
                    <ThumbnailImage {...outfitThumbnailProps} />
                </a>
            );
        })}
    </GridListGroup>
);

ThumbnailGridList.propTypes = {
    outfits: PropTypes.array,
};

export default memo(ThumbnailGridList);
