// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import useQuery from 'hooks/useQuery';
import {
  selectAlbum,
  selectAlbumLoading,
} from 'services/album/selectors';
import * as actions from 'services/album/actions';

// @own
import { Container } from './styles';

function TracksList({ album, getAlbum }) {
  const query = useQuery();
  const id = query.get('id') || null;

  useEffect(() => {
    if (id) {
      getAlbum({ id });
    }
  }, [id]);

  console.log({ album });

  return (
    <Container>{id}</Container>
  );
}

TracksList.defaultProps = {
  isLoading: false,
  album: {},
};

TracksList.propTypes = {
  album: PropTypes.object,
  getAlbum: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  album: selectAlbum(state),
  isLoading: selectAlbumLoading(state),
});

export default connect(mapStateToProps, actions)(TracksList);
