import React from 'react';
import { render } from '@testing-library/react';

import { ThumbnailImage } from '..';

describe('<ThumbnailImage  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <ThumbnailImage
        thumbnailUrl="testing"
        imageHeight={100}
        imageWidth={100}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
