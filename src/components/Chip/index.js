// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import Text from 'components/Text';

// @own
import { ChipStyled } from './styles';

function Chip({
  className,
  ellipsis,
  size,
  text,
}) {
  return (
    <ChipStyled className={className}>
      <Text
        color="black"
        ellipsis={ellipsis}
        size={size}
        type="h5"
      >
        {text}
      </Text>
    </ChipStyled>
  );
}

Chip.defaultProps = {
  className: '',
  ellipsis: '',
};

Chip.propTypes = {
  className: PropTypes.string,
  ellipsis: PropTypes.bool,
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Chip;
