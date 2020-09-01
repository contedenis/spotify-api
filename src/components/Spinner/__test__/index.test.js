// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

// @own
import Spinner from '../index';

describe('Spinner', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <Spinner />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render children', () => {
    render(
      <Spinner>
        <h1 name="span">children</h1>
      </Spinner>,
    );

    const children = screen.getByRole('heading', { name: 'children' });
    expect(children).toBeInTheDocument();
  });

  it('render spinner', () => {
    render(
      <Spinner loading>
        <h1 name="span">children</h1>
      </Spinner>,
    );

    const children = screen.queryByRole('heading', { name: 'children' });
    expect(children).not.toBeInTheDocument();
  });
});
