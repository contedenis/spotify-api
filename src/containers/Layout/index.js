// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import VideoFullscreen from 'components/FullscreenVideo';
import guitarPoster from 'assets/images/guitarPoster.jpg';
import guitarVideo from 'assets/video/guitarMp4.mp4';

// @own
import { LayoutStyled } from './styles';

function Layout({ children }) {
  return (
    <LayoutStyled>
      <VideoFullscreen poster={guitarPoster} src={guitarVideo} />
      {children}
    </LayoutStyled>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
