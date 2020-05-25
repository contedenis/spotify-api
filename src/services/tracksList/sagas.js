// @packages
import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';

import {
  GET_TRACKSLIST,
  GET_PLAYLIST_TRACKS,
} from './actionTypes';
import {
  getTracksListFail,
  getTracksListSuccess,
  getPlaylistTracksFail,
  getPlaylistTracksSuccess,
} from './actions';
import {
  getTracksList,
  getPlaylistTracks,
} from './api';

export function* getTracksListWorker({ payload: { id } }) {
  try {
    const payload = yield call(getTracksList, id);
    yield put(getTracksListSuccess({ tracksList: payload }));
  } catch ({ message }) {
    yield put(getTracksListFail({ errorMessage: message }));
  }
}

export function* getTracksListWatcher() {
  yield takeLatest(GET_TRACKSLIST, getTracksListWorker);
}

export function* getPlaylistTracksWorker({ payload: { id } }) {
  try {
    const payload = yield call(getPlaylistTracks, id);
    const playlists = yield select((state) => state.playlists);
    const playlist = playlists.list.length > 0 && playlists.list
      .find((item) => item.id === id);
    const playlistTracks = {
      images: playlist.images,
      name: playlist.name,
      tracks: {
        items: payload.items.map((item) => item.track),
      },
    };

    yield put(getPlaylistTracksSuccess({ tracksList: playlistTracks }));
  } catch ({ message }) {
    yield put(getPlaylistTracksFail({ errorMessage: message }));
  }
}

export function* getPlaylistTracksWatcher() {
  yield takeLatest(GET_PLAYLIST_TRACKS, getPlaylistTracksWorker);
}

export default {
  getTracksListWatcher,
  getPlaylistTracksWatcher,
};
