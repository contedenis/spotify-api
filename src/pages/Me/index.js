// @packages
import React, { useState } from 'react';

// @app
import Layout from 'containers/Layout';
import ListAlbums from 'containers/ListAlbums';
import Navbar from 'containers/Navbar';
import Playlists from 'containers/Playlists';
import TracksList from 'containers/TracksList';
import UserCard from 'containers/UserCard';

// @own
import {
  GridElement,
  GridStyled,
  ListAlbumsContainer,
  UserCardContainer,
} from './styles';

function Me() {
  const [showRecently, setShowRecently] = useState(false);
  const [showPlaylists, setShowPlaylists] = useState(false);
  const [showTracklist, setShowTracklist] = useState(false);

  return (
    <Layout>
      <Navbar />
      <GridStyled>
        <GridElement showRecently={showRecently}>
          <UserCardContainer>
            <UserCard onAnimationEnd={() => setShowRecently(true)} />
          </UserCardContainer>
          <ListAlbumsContainer>
            {showRecently && <ListAlbums onAnimationEnd={() => setShowPlaylists(true)} />}
          </ListAlbumsContainer>
        </GridElement>
        <GridElement>
          {showPlaylists && <Playlists onAnimationEnd={() => setShowTracklist(true)} />}
          {showTracklist && <TracksList />}
        </GridElement>
      </GridStyled>
    </Layout>
  );
}

export default Me;
