// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import Card from '../index';

describe('Card', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Card />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render Card', () => {
    render(<Card>Item</Card>);

    const cardItem = screen.getByText('Item');
    expect(cardItem).toBeInTheDocument();
  });
});
