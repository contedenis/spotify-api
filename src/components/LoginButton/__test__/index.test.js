// @packages
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

// @own
import LoginButton from '../index';

describe('LoginButton', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <LoginButton />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('render LoginButton', () => {
    render(<LoginButton />);

    const buttonItem = screen.getByRole('button', { name: /Login to/i });
    expect(buttonItem).toBeInTheDocument();
  });

  it('render LoginButton with Logout text', () => {
    render(<LoginButton isLogged />);

    const buttonItem = screen.getByRole('button', { name: /Log out/i });
    expect(buttonItem).toBeInTheDocument();
  });

  it('onClick button', () => {
    const handleLoginClick = jest.fn();
    const handleLogOutClick = jest.fn();

    const { rerender } = render(
      <LoginButton handleLoginClick={handleLoginClick} />,
    );

    const buttonLoginItem = screen.getByRole('button', { name: /Login/i });
    userEvent.click(buttonLoginItem);
    expect(handleLoginClick).toHaveBeenCalledTimes(1);

    rerender(<LoginButton isLogged handleLogOutClick={handleLogOutClick} />);
    const buttonLogoutItem = screen.getByRole('button', { name: /Log out/i });
    userEvent.click(buttonLogoutItem);
    expect(handleLogOutClick).toHaveBeenCalledTimes(1);
  });
});
