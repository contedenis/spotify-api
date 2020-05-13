// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  AlbumCardStyled,
  AlbumName,
  ImageStyled,
  TextContent,
  TrackName,
} from './styles';

function AlbumCard({ src, name, trackName }) {
  return (
    <AlbumCardStyled>
      <ImageStyled
        size={150}
        src={src}
      />
      <TextContent>
        <TrackName type="h4" color="white" size={16}>
          {trackName}
        </TrackName>
        <AlbumName type="h6" color="white" size={12}>
          {name}
        </AlbumName>
      </TextContent>
    </AlbumCardStyled>
  );
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};

export default AlbumCard;
