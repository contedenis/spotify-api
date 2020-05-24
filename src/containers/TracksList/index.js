// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import * as actions from 'services/album/actions';
import Image from 'components/Image';
import Spinner from 'components/Spinner';
import Text from 'components/Text';
import noteWhite from 'assets/images/note_white.svg';
import player from 'assets/images/player.svg';
import useQuery from 'hooks/useQuery';
import {
  selectAlbum,
  selectAlbumLoading,
} from 'services/album/selectors';

// @own
import {
  ChipStyled,
  ChipsContainer,
  Container,
  Content,
  EmptyState,
  EmptyStateText,
  IconStyled,
  ImageStyled,
  PlayIconOutlinedStyled,
  PlayIconStyled,
  Track,
  TrackContainer,
  TrackContent,
  TracksListStyled,
} from './styles';

function TracksList({ album, isLoading, getAlbum }) {
  const [trackId, setTrackId] = useState(false);
  const query = useQuery();
  const id = query.get('id') || null;
  const hasTracks = album && album.tracks && album.tracks.length > 0;

  useEffect(() => {
    if (id) {
      getAlbum({ id });
    }
  }, [id]);

  return (
    <TracksListStyled>
      <Container loading={isLoading}>
        {id ? (
          <>
            {isLoading ? (
              <Spinner loading={isLoading} />
            ) : (
              <Content>
                <ImageStyled src={hasTracks && album.images[0].url} size={400} />
                <TrackContainer>
                  {hasTracks && album.tracks.map((track) => (
                    <Track
                      onMouseLeave={() => setTrackId(null)}
                      onMouseOver={() => setTrackId(track.id)}
                    >
                      {trackId === track.id
                        ? <PlayIconStyled />
                        : <PlayIconOutlinedStyled />}
                      <TrackContent>
                        <Text type="h3" size={24}>{track.name}</Text>
                        <ChipsContainer>
                          {track.artists.map((artist) => (
                            <ChipStyled size={10} text={artist.name} />
                          ))}
                        </ChipsContainer>
                      </TrackContent>
                      {trackId === track.id && <IconStyled src={noteWhite} size={50} />}
                    </Track>
                  ))}
                </TrackContainer>
              </Content>
            )}
          </>
        ) : (
          <EmptyState>
            <Image src={player} size={300} />
            <EmptyStateText type="h5" size={24}>no tracks found</EmptyStateText>
          </EmptyState>
        )}
      </Container>
    </TracksListStyled>
  );
}

TracksList.defaultProps = {
  isLoading: false,
  album: [],
};

TracksList.propTypes = {
  album: PropTypes.array,
  getAlbum: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  album: selectAlbum(state),
  isLoading: selectAlbumLoading(state),
});

export default connect(mapStateToProps, actions)(TracksList);
