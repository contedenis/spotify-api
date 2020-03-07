// @packages
import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';

// @own
import App from '../index';

const mockStore = configureStore([]);

describe('App login', () => {
  let store;

  it('renders Login button', () => {
    store = mockStore({
      session: {
        sessionState: 'LOGGED_OUT',
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = getByText(/Login to Spotify/i);
    expect(button).toBeInTheDocument();
  });

  it('click login to spotify button', () => {
    store = mockStore({
      session: {
        sessionState: 'LOGGED_OUT',
      },
    });
    store.dispatch = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    fireEvent.click(getByText(/Login to Spotify/i));
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  it('render Logout button', () => {
    localStorage.setItem('token', '123');
    store = mockStore({
      session: {
        sessionState: 'LOGGED_IN',
      },
    });

    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = getByText(/LOG OUT/i);
    expect(button).toBeInTheDocument();
  });

  it('click logout button', () => {
    localStorage.setItem('token', '123');
    store = mockStore({
      session: {
        sessionState: 'LOGGED_IN',
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const button = getByText(/LOG OUT/i);
    button.onclick = jest.fn();

    fireEvent.click(getByText(/LOG OUT/i));
    expect(button.onclick).toHaveBeenCalledTimes(1);
  });
});
