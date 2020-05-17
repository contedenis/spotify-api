import React, { useState } from 'react';

// @app
import Layout from 'containers/Layout';
import ListAlbums from 'containers/ListAlbums';
import TracksList from 'containers/TracksList';
import Navbar from 'containers/Navbar';
import Playlists from 'containers/Playlists';
import UserCard from 'containers/UserCard';

// @own
import { GridStyled } from './styles';

function Me() {
  const [showRecently, setShowRecently] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);

  return (
    <Layout>
      <Navbar />
      <GridStyled>
        <UserCard onAnimationEnd={() => setShowRecently(true)} />
        {showRecently && <ListAlbums onAnimationEnd={() => setShowPlaylists(true)} />}
        {showPlaylists && <Playlists />}
        <TracksList />
      </GridStyled>
    </Layout>
  );
}

export default Me;
