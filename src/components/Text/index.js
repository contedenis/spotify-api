// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { TextStyled } from './styles';

function Text({
  children,
  className,
  color,
  size,
  type,
}) {
  return (
    <TextStyled
      as={type}
      className={className}
      color={color}
      size={size}
    >
      {children}
    </TextStyled>
  );
}

Text.defaultProps = {
  className: '',
  color: 'white',
  size: 12,
  type: 'h3',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  type: PropTypes.string,
};

export default Text;
