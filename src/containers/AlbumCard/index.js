// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  AlbumCardStyled,
  ImageStyled,
  TextStyled,
} from './styles';

function AlbumCard({ src, name }) {
  return (
    <AlbumCardStyled>
      <ImageStyled
        size={150}
        src={src}
        type="circle"
      />
      <TextStyled type="h4" color="white" size={16}>
        {name}
      </TextStyled>
    </AlbumCardStyled>
  );
}

AlbumCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default AlbumCard;
