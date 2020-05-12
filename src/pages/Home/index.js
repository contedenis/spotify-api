import React from 'react';

// @app
import Layout from 'containers/Layout';
import Navbar from 'containers/Navbar';
import UserCard from 'containers/UserCard';

// @own
import { GridStyled } from './styles';

function Home() {
  return (
    <Layout>
      <Navbar />
      <GridStyled>
        <UserCard />
      </GridStyled>
    </Layout>
  );
}

export default Home;
