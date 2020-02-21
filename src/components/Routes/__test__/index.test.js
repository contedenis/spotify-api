// @packages
import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// @own
import Routes from '../index';

describe('render routes correctly', () => {
  it('render path="/"', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Routes />
      </MemoryRouter>,
    );
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('render 404', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/error']}>
        <Routes />
      </MemoryRouter>,
    );
    const errorMessage = getByText(/Page not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
