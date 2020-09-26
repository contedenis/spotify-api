// @packages
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

// @app
import {
  cleanTracksList,
  getPlaylistTracks,
  getTracksList,
} from 'services/tracksList/actions';
import { putPlay } from 'services/playing/actions';
import useQuery from 'hooks/useQuery';
import {
  selectTrackListOffset,
  selectTracksList,
  selectTracksListLoading,
  selectTracksListTotal,
} from 'services/tracksList/selectors';

// @own
import Content from './Content';
import EmptyState from './EmptyState';
import { Container, SpinnerStyled, TracksListStyled } from './styles';
import { DEFAULT_PARAMS } from './constants';

function TracksList() {
  const [trackId, setTrackId] = useState(false);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const query = useQuery();
  const id = query.get('id') || null;
  const tracksList = useSelector(selectTracksList);
  const hasTracks = tracksList && tracksList.tracks && tracksList.tracks.length > 0;
  const isLoading = useSelector(selectTracksListLoading);
  const offset = useSelector(selectTrackListOffset);
  const total = useSelector(selectTracksListTotal);

  function getAction(nextPage) {
    const newOffset = nextPage
      ? offset + DEFAULT_PARAMS.limit
      : DEFAULT_PARAMS.offset;
    const params = {
      ...DEFAULT_PARAMS,
      offset: newOffset,
    };

    if (pathname === '/recent-played') {
      dispatch(getTracksList({ id, nextPage, params }));
    } else if (pathname === '/playlist') {
      dispatch(getPlaylistTracks({ id, nextPage, params }));
    }
  }

  useEffect(() => {
    if (id) {
      dispatch(cleanTracksList());
      getAction();
    }
  }, [id]);

  useEffect(() => {
    if (trackId) {
      dispatch(putPlay({ trackId }));
    }
  }, [trackId, putPlay]);

  const onClick = useCallback(
    (id) => setTrackId(id),
    [],
  );

  const onNext = useCallback(
    () => getAction(true),
    [],
  );

  return (
    <TracksListStyled>
      <Container loading={isLoading}>
        <SpinnerStyled loading={isLoading}>
          {id && hasTracks ? (
            <Content
              onClick={onClick}
              onNext={onNext}
              total={total}
              trackId={trackId}
              tracksList={tracksList}
            />
          ) : (
            <EmptyState>
              no tracks found
            </EmptyState>
          )}
        </SpinnerStyled>
      </Container>
    </TracksListStyled>
  );
}

export default TracksList;
