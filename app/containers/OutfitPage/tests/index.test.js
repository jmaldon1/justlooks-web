/**
 *
 * Tests for OutfitPage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions

import { OutfitPage } from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<OutfitPage />', () => {
    it('Expect to not log errors in console', () => {
        const spy = jest.spyOn(global.console, 'error');
        const dispatch = jest.fn();
        render(
            <IntlProvider locale={DEFAULT_LOCALE}>
                <OutfitPage dispatch={dispatch} />
            </IntlProvider>,
        );
        expect(spy).not.toHaveBeenCalled();
    });

    it('Expect to have additional unit tests specified', () => {
        expect(true).toEqual(false);
    });

    /**
     * Unskip this test to use it
     *
     * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
     */
    it.skip('Should render and match the snapshot', () => {
        const {
            container: { firstChild },
        } = render(
            <IntlProvider locale={DEFAULT_LOCALE}>
                <OutfitPage />
            </IntlProvider>,
        );
        expect(firstChild).toMatchSnapshot();
    });
});
