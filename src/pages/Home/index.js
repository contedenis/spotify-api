import React, { useState } from 'react';

// @app
import Layout from 'containers/Layout';
import ListAlbums from 'containers/ListAlbums';
import Navbar from 'containers/Navbar';
import UserCard from 'containers/UserCard';

// @own
import { GridStyled } from './styles';

function Home() {
  const [showRecently, setShowRecently] = useState(false);

  return (
    <Layout>
      <Navbar />
      <GridStyled>
        <UserCard onAnimationEnd={() => setShowRecently(true)} />
        {showRecently && <ListAlbums />}
      </GridStyled>
    </Layout>
  );
}

export default Home;
