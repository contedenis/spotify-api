// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { ImageStyled } from './styles';

function Image({
  className,
  size,
  src,
  type,
}) {
  return (
    <ImageStyled
      className={className}
      size={size}
      src={src}
      type={type}
    />
  );
}

Image.defaultProps = {
  className: '',
  size: 50,
  type: 'circle',
};

Image.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Image;
