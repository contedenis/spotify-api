// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import Chip from '../index';

describe('Chip', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Chip />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Chip', () => {
    render(<Chip text="chip" />);

    const chipItem = screen.getByRole('heading', { name: 'chip' });
    expect(chipItem).toBeInTheDocument();
  });
});
