// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import { FullscreenVideoStyled } from './styles';

function FullscreenVideo({
  poster,
  src,
  ...props
}) {
  return (
    <FullscreenVideoStyled
      poster={poster}
      autoPlay
      muted
      loop
      {...props}
    >
      <source src={src} type="video/webm" />
      <source src={src} type="video/mp4" />
    </FullscreenVideoStyled>
  );
}

FullscreenVideo.defaultProps = {
  poster: '',
};

FullscreenVideo.propTypes = {
  poster: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default FullscreenVideo;
