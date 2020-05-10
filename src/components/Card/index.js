// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { CardStyled } from './styles';

function Image({ children }) {
  return (
    <CardStyled>
      {children}
    </CardStyled>
  );
}

Image.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Image;
