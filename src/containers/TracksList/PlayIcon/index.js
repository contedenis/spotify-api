// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  PlayIconOutlinedStyled,
  PlayIconStyled,
} from './styles';

function PlayIcon({ track, trackId }) {
  return (
    <>
      {trackId === track.id
        ? <PlayIconStyled />
        : <PlayIconOutlinedStyled />}
    </>
  );
}

PlayIcon.defaultProps = {
  track: {},
  trackId: null,
};

PlayIcon.propTypes = {
  track: PropTypes.object,
  trackId: PropTypes.number,
};

export default PlayIcon;
