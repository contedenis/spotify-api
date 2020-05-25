// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { TextStyled } from './styles';

function Text({
  children,
  className,
  color,
  ellipsis,
  size,
  type,
}) {
  return (
    <TextStyled
      as={type}
      className={className}
      color={color}
      ellipsis={ellipsis}
      size={size}
    >
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  className: '',
  color: 'white',
  ellipsis: false,
  size: 12,
  type: 'h3',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ellipsis: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
};

export default Text;
