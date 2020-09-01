// @packages
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import FullscreenVideo from '../index';

describe('FullscreenVideo', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <FullscreenVideo />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
