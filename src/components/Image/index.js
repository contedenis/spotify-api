// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { ImageStyled } from './styles';

function Image({
  alt,
  className,
  size,
  src,
  type,
}) {
  return (
    <ImageStyled
      alt={alt}
      className={className}
      size={size}
      src={src}
      type={type}
    />
  );
}

Image.defaultProps = {
  alt: '-image',
  className: '',
  size: 50,
  type: null,
};

Image.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.number,
  src: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default Image;
