// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { LayoutStyled } from './styles';

function Layout({ children }) {
  return (
    <LayoutStyled>
      {children}
    </LayoutStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
