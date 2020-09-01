/**
 *
 * OutfitsPage
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectOutfitsPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function OutfitsPage() {
    useInjectReducer({ key: 'outfitsPage', reducer });
    useInjectSaga({ key: 'outfitsPage', saga });

    return (
        <div>
            <Helmet>
                <title>OutfitsPage</title>
                <meta name="description" content="Description of OutfitsPage" />
            </Helmet>
            <FormattedMessage {...messages.header} />
        </div>
    );
}

OutfitsPage.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
    outfitsPage: makeSelectOutfitsPage(),
});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(OutfitsPage);
