// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import Text from 'components/Text';

// @own
import { ChipStyled } from './styles';

function Chip({ className, text, size }) {
  return (
    <ChipStyled className={className}>
      <Text type="h5" color="black" size={size}>{text}</Text>
    </ChipStyled>
  );
}

Chip.defaultProps = {
  className: '',
};

Chip.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Chip;
