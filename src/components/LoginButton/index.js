// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { ButtonStyled } from './styles';

function LogginButton({
  handleLogOutClick,
  handleLoginClick,
  isLogged,
}) {
  return (
    <ButtonStyled onClick={isLogged ? handleLogOutClick : handleLoginClick}>
      {isLogged ? 'LOG OUT' : 'Login to Spotify'}
    </ButtonStyled>
  );
}

LogginButton.propTypes = {
  handleLogOutClick: PropTypes.func.isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default LogginButton;
