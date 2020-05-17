// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';

// @own
import {
  AlbumCardStyled,
  AlbumName,
  ImageStyled,
  TextContent,
  TrackName,
} from './styles';

function AlbumCard({
  albumId,
  name,
  src,
  trackName,
}) {
  const { path } = useRouteMatch();
  return (
    <AlbumCardStyled to={`${path}/recent-played?id=${albumId}`}>
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
  albumId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  trackName: PropTypes.string.isRequired,
};

export default AlbumCard;
