// @packages
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

// @app
import {
  cleanTracksList,
  getPlaylistTracks,
  getTracksList,
} from 'services/tracksList/actions';
import { putPlay } from 'services/playing/actions';
import Image from 'components/Image';
import InfiniteScroll from 'components/InfiniteScroll';
import Spinner from 'components/Spinner';
import Text from 'components/Text';
import player from 'assets/images/player.svg';
import useQuery from 'hooks/useQuery';
import {
  selectTrackListOffset,
  selectTracksList,
  selectTracksListLoading,
  selectTracksListTotal,
} from 'services/tracksList/selectors';
import PlayIcon from './PlayIcon';

// @own
import {
  Container,
  Content,
  EmptyState,
  EmptyStateText,
  ImageStyled,
  Track,
  TrackContainer,
  TrackContent,
  TracksListStyled,
} from './styles';
import Artists from './Artists';
import { DEFAULT_PARAMS } from './constants';

function TracksList({
  cleanTracksList,
  getPlaylistTracks,
  getTracksList,
  isLoading,
  offset,
  putPlay,
  total,
  tracksList,
}) {
  const [trackId, setTrackId] = useState(false);
  const { pathname } = useLocation();
  const query = useQuery();
  const id = query.get('id') || null;
  const hasTracks = tracksList && tracksList.tracks && tracksList.tracks.length > 0;

  function getAction(nextPage) {
    const newOffset = nextPage
      ? offset + DEFAULT_PARAMS.limit
      : DEFAULT_PARAMS.offset;
    const params = {
      ...DEFAULT_PARAMS,
      offset: newOffset,
    };

    if (pathname === '/me/recent-played') {
      getTracksList({ id, nextPage, params });
    } else if (pathname === '/me/playlist') {
      getPlaylistTracks({ id, nextPage, params });
    }
  }

  useEffect(() => {
    if (id) {
      cleanTracksList();
      getAction();
    }
  }, [id]);

  function play() {
    putPlay({ trackId });
  }

  return (
    <TracksListStyled>
      <Container loading={isLoading}>
        <Spinner loading={isLoading}>
          {id && hasTracks ? (
            <Content>
              <ImageStyled src={hasTracks && tracksList.images[0].url} size={400} />
              <TrackContainer id="MAIN_ID">
                <InfiniteScroll
                  dataLength={tracksList.tracks.length}
                  hasMore={total > tracksList.tracks.length}
                  next={() => getAction(true)}
                  scrollableTarget="MAIN_ID"
                >
                  {tracksList.tracks.map((track) => (
                    <Track
                      onMouseLeave={() => setTrackId(null)}
                      onMouseOver={() => setTrackId(track.id)}
                      onClick={() => play(track)}
                    >
                      <PlayIcon track={track} trackId={trackId} />
                      <TrackContent>
                        <Text ellipsis type="h3" size={24}>{track.name}</Text>
                        <Artists track={track} />
                      </TrackContent>
                    </Track>
                  ))}
                </InfiniteScroll>
              </TrackContainer>
            </Content>
          ) : (
            <EmptyState>
              <Image src={player} size={300} />
              <EmptyStateText type="h5" size={24}>no tracks found</EmptyStateText>
            </EmptyState>
          )}
        </Spinner>
      </Container>
    </TracksListStyled>
  );
}

TracksList.defaultProps = {
  isLoading: false,
  offset: 0,
  total: 0,
  tracksList: [],
};

TracksList.propTypes = {
  cleanTracksList: PropTypes.func.isRequired,
  getPlaylistTracks: PropTypes.func.isRequired,
  getTracksList: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  offset: PropTypes.number,
  putPlay: PropTypes.func.isRequired,
  total: PropTypes.number,
  tracksList: PropTypes.array,
};

const mapStateToProps = (state) => ({
  isLoading: selectTracksListLoading(state),
  offset: selectTrackListOffset(state),
  total: selectTracksListTotal(state),
  tracksList: selectTracksList(state),
});

export default connect(mapStateToProps, {
  cleanTracksList,
  getPlaylistTracks,
  getTracksList,
  putPlay,
})(TracksList);
