// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { SpinnerStyled } from './styles';

function Spinner({
  children,
  className,
  loading,
  size,
}) {
  return (
    <>
      {loading ? <SpinnerStyled className={className} size={size} /> : children}
    </>
  );
}

Spinner.defaultProps = {
  children: null,
  className: '',
  loading: false,
  size: 50,
};

Spinner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default Spinner;
