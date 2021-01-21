import React from 'react';
import { render } from '@testing-library/react';

import { CarouselArrow } from '..';

describe('<CarouselArrow  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CarouselArrow />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
