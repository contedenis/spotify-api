// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import VideoFullscreen from 'components/FullscreenVideo';
import guitarPoster from 'assets/images/guitarPoster.jpg';
import guitarVideo from 'assets/video/guitarMp4.mp4';

// @own
import { LayoutStyled } from './styles';

function Layout({ children, logIn }) {
  return (
    <LayoutStyled logIn={logIn}>
      <VideoFullscreen poster={guitarPoster} src={guitarVideo} />
      {children}
    </LayoutStyled>
  );
}

Layout.defaultProps = {
  logIn: false,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  logIn: PropTypes.bool,
};

export default Layout;
