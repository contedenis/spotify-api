// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import Image from '../index';

describe('Image', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Image />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Image', () => {
    render(<Image alt="image-test" />);

    const chipItem = screen.getByRole('img', { name: 'image-test' });
    expect(chipItem).toBeInTheDocument();
  });
});
