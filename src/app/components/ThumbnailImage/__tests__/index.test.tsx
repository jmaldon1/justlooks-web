import React from 'react';
import { render } from '@testing-library/react';

import { ThumbnailImage } from '..';

describe('<ThumbnailImage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<ThumbnailImage />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
