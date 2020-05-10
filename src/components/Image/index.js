// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { ImageStyled } from './styles';

function Image({ size, src, type }) {
  return (
    <ImageStyled size={size} src={src} type={type} />
  );
}

Image.defaultProps = {
  type: 'circle',
  size: 50,
};

Image.propTypes = {
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Image;
