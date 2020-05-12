import React, { useState } from 'react';

// @app
import Layout from 'containers/Layout';
import Navbar from 'containers/Navbar';
import RecentlyListened from 'containers/RecentlyListened';
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
        {showRecently && <RecentlyListened />}
      </GridStyled>
    </Layout>
  );
}

export default Home;
