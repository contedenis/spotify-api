import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import Layout from 'containers/Layout';
import ListAlbums from 'containers/ListAlbums';
import Navbar from 'containers/Navbar';
import Playlists from 'containers/Playlists';
import TracksList from 'containers/TracksList';
import UserCard from 'containers/UserCard';
import { putCurrentDevice } from 'services/session/actions';
import { selectDeviceId } from 'services/session/selectors';

// @own
import { GridStyled } from './styles';

function Me({ deviceId, putCurrentDevice }) {
  const [showRecently, setShowRecently] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [showTracklist, setShowTracklist] = useState(false);

  useEffect(() => {
    if (deviceId) {
      putCurrentDevice({ deviceId });
    }
  }, [deviceId]);

  return (
    <Layout>
      <Navbar />
      <GridStyled>
        <UserCard onAnimationEnd={() => setShowRecently(true)} />
        {showRecently && <ListAlbums onAnimationEnd={() => setShowPlaylists(true)} />}
        {showPlaylists && <Playlists onAnimationEnd={() => setShowTracklist(true)} />}
        {showTracklist && <TracksList />}
      </GridStyled>
    </Layout>
  );
}

Me.propTypes = {
  putCurrentDevice: PropTypes.func.isRequired,
  deviceId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  deviceId: selectDeviceId(state),
});

export default connect(mapStateToProps, { putCurrentDevice })(Me);
