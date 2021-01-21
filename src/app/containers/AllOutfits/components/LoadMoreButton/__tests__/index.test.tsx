import React from 'react';
import { render } from '@testing-library/react';

import { LoadMoreButton } from '..';

describe('<LoadMoreButton  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<LoadMoreButton />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
