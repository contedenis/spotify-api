// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { SpinnerStyled } from './styles';

function Spinner({ size, children, loading }) {
  return (
    <>
      {loading ? <SpinnerStyled size={size} /> : children}
    </>
  );
}

Spinner.defaultProps = {
  children: null,
  loading: false,
  size: 50,
};

Spinner.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
  size: PropTypes.number,
};

export default Spinner;
