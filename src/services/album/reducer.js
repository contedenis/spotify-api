// @own
import {
  GET_ALBUM,
  GET_ALBUM_FAIL,
  GET_ALBUM_SUCCESS,
} from './actionTypes';

const initialState = {
  errorMessage: null,
  album: {},
  loading: false,
};

function formatAlbum(album) {
  return ({
    artists: album.artists,
    images: album.images,
    name: album.name,
    tracks: album.tracks.items,
  });
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_ALBUM:
      return {
        ...state,
        loading: true,
      };
    case GET_ALBUM_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_ALBUM_SUCCESS:
      return {
        ...state,
        album: formatAlbum(payload.album),
        loading: false,
      };
    default:
      return state;
  }
}
