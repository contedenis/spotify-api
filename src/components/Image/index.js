// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { ImageStyled } from './styles';

function Image({ src, type }) {
  return (
    <ImageStyled src={src} type={type} />
  );
}

Image.defaultProps = {
  type: 'circle',
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Image;
