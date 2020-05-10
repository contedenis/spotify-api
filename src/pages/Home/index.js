import React from 'react';

// @app
import Layout from 'containers/Layout';
import Navbar from 'containers/Navbar';
import UserCard from 'containers/UserCard';

function Home() {
  return (
    <Layout>
      <Navbar />
      <UserCard />
    </Layout>
  );
}

export default Home;
