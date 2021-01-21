import React from 'react';
import { render } from '@testing-library/react';

import { Carousel } from '..';

describe('<Carousel  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Carousel />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
