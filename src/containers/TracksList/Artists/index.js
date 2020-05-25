// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  AndMoreText,
  ChipStyled,
  ChipsContainer,
} from './styles';

function Artists({ track }) {
  const { artists } = track;
  const artistsToShow = artists.length > 4
    ? [...artists.slice(0, 4), 'and more...']
    : artists;

  return (
    <ChipsContainer>
      {artistsToShow.map((artist, key) => {
        if (key < 4) {
          return (
            <ChipStyled ellipsis size={10} text={artist.name}>
              {artist}
            </ChipStyled>
          );
        }
        return <AndMoreText ellipsis type="h5" size={12}> and more ...</AndMoreText>;
      })}
    </ChipsContainer>
  );
}

Artists.defaultProps = {
  track: {},
};

Artists.propTypes = {
  track: PropTypes.object,
};

export default Artists;
