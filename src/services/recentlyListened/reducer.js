// @own
import {
  GET_RECENTLY_LISTENED,
  GET_RECENTLY_LISTENED_FAIL,
  GET_RECENTLY_LISTENED_SUCCESS,
} from './actionTypes';

const initialState = {
  errorMessage: null,
  list: [],
  loading: false,
};

function formatList(list) {
  const newList = list && list.map((item) => {
    const {
      track: {
        album: {
          id: albumId,
          images: albumImages,
          name: albumName,
          uri: albumContextUri,
        },
        name: trackName,
      },
    } = item;
    const album = {
      albumContextUri,
      albumId,
      albumImage: albumImages.find((image) => image.width === 640).url,
      albumName,
      trackName,
    };
    return album;
  });
  return newList;
}

function removeDuplicate(list) {
  const formattedList = formatList(list.items);
  const listFiltered = formattedList.reduce((acc, actualItem) => {
    if (!acc.some((item) => item.trackName === actualItem.trackName)) {
      acc.push(actualItem);
    }
    return acc;
  }, []);
  return listFiltered.slice(0, 20);
}

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_RECENTLY_LISTENED:
      return {
        ...state,
        loading: true,
      };
    case GET_RECENTLY_LISTENED_FAIL:
      return {
        ...state,
        errorMessage: payload.errorMessage,
        loading: false,
      };
    case GET_RECENTLY_LISTENED_SUCCESS:
      return {
        ...state,
        list: removeDuplicate(payload.list),
        loading: false,
      };
    default:
      return state;
  }
}
