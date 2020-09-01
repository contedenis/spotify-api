// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import Text from '../index';

describe('Text', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Text />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render text', () => {
    render(
      <Text>
        children
      </Text>,
    );

    const children = screen.getByRole('heading', { name: 'children' });
    expect(children).toBeInTheDocument();
  });
});
