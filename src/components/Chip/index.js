// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import Text from 'components/Text';

// @own
import { ChipStyled } from './styles';

function Chip({ text, size }) {
  return (
    <ChipStyled>
      <Text type="h5" color="black" size={size}>{text}</Text>
    </ChipStyled>
  );
}

Chip.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};

export default Chip;
