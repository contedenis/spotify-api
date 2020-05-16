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
          id,
          images,
          name,
          uri: contextUri,
        }, name: trackName,
      },
    } = item;
    const album = {
      trackName,
      name,
      id,
      image: images.find((image) => image.width === 640).url,
      contextUri,
    };
    return album;
  });
  return newList;
}

function removeDuplicate(list) {
  const formattedList = formatList(list.items);
  const listFiltered = formattedList.reduce((acc, actualItem) => {
    if (!acc.some((item) => item.name === actualItem.name)) {
      acc.push(actualItem);
    }
    return acc;
  }, []);
  return listFiltered.slice(0, 6);
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
