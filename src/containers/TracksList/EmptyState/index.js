// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import player from 'assets/images/player.svg';

// @own
import {
  EmptyImage,
  Container,
  EmptyText,
} from './styles';

function EmptyState({ children }) {
  return (
    <Container>
      <EmptyImage src={player} size={300} />
      <EmptyText type="h5" size={24}>
        {children}
      </EmptyText>
    </Container>
  );
}

EmptyState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmptyState;
