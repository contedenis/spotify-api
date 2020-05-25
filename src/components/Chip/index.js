// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  ChipStyled,
  TextStyled,
} from './styles';

function Chip({
  className,
  ellipsis,
  size,
  text,
}) {
  return (
    <ChipStyled className={className}>
      <TextStyled
        color="black"
        ellipsis={ellipsis}
        size={size}
        type="h5"
      >
        {text}
      </TextStyled>
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
