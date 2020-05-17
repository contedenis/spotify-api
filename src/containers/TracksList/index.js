// @packages
import React from 'react';

// @app
import useQuery from 'hooks/useQuery';

// @own
import { Container } from './styles';

function TracksList() {
  const query = useQuery();

  return (
    <Container>{query.get('id')}</Container>
  );
}

export default TracksList;
