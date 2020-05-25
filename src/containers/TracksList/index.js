// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

// @app
import {
  getTracksList,
  getPlaylistTracks,
} from 'services/tracksList/actions';
import Image from 'components/Image';
import Spinner from 'components/Spinner';
import Text from 'components/Text';
import noteWhite from 'assets/images/note_white.svg';
import player from 'assets/images/player.svg';
import useQuery from 'hooks/useQuery';
import {
  selectTracksList,
  selectTracksListLoading,
} from 'services/tracksList/selectors';

// @own
import {
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
import Artists from './Artists';

function TracksList({
  getPlaylistTracks,
  getTracksList,
  isLoading,
  tracksList,
}) {
  const [trackId, setTrackId] = useState(false);
  const { pathname } = useLocation();
  const query = useQuery();
  const id = query.get('id') || null;
  const hasTracks = tracksList && tracksList.tracks && tracksList.tracks.length > 0;

  useEffect(() => {
    if (id) {
      if (pathname === '/me/recent-played') {
        getTracksList({ id });
      } else if (pathname === '/me/playlist') {
        getPlaylistTracks({ id });
      }
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
                <ImageStyled src={hasTracks && tracksList.images[0].url} size={400} />
                <TrackContainer>
                  {hasTracks && tracksList.tracks.map((track) => (
                    <Track
                      onMouseLeave={() => setTrackId(null)}
                      onMouseOver={() => setTrackId(track.id)}
                    >
                      {trackId === track.id
                        ? <PlayIconStyled />
                        : <PlayIconOutlinedStyled />}
                      <TrackContent>
                        <Text ellipsis type="h3" size={24}>{track.name}</Text>
                        <Artists track={track} />
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
  tracksList: [],
};

TracksList.propTypes = {
  tracksList: PropTypes.array,
  getTracksList: PropTypes.func.isRequired,
  getPlaylistTracks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  tracksList: selectTracksList(state),
  isLoading: selectTracksListLoading(state),
});

export default connect(mapStateToProps, { getTracksList, getPlaylistTracks })(TracksList);
