// @packages
import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';

// @own
import Routes from '../index';

const mockStore = configureStore([]);

describe('render routes correctly', () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );
  });

  it('render path="/"', () => {
    const { getByText } = component;
    const linkElement = getByText(/Login to Spotify/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('render 404', () => {
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/error']}>
          <Routes />
        </MemoryRouter>
      </Provider>,
    );
    const errorMessage = getByText(/Page not found/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
