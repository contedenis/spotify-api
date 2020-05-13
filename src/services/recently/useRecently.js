// @packages
import { useQuery } from 'react-query';
import { getRecentlyPlayed as getRecentlyPlayedApi } from './api';

function removeDuplicate(albums) {
  const albumsFiltered = albums.reduce((acc, actualItem) => {
    if (!acc.some((item) => item.name === actualItem.name)) {
      acc.push(actualItem);
    }
    return acc;
  }, []);
  return albumsFiltered;
}

const getRecentlyPlayed = async () => {
  const { data } = await getRecentlyPlayedApi();
  const albums = data.items && data.items.map((item) => {
    const { track: { album: { name, id, images }, name: trackName } } = item;
    const album = {
      trackName,
      name,
      id,
      image: images.find((image) => image.width === 640).url,
    };
    return album;
  });
  const albumsFiltered = removeDuplicate(albums).slice(0, 6);

  return albumsFiltered;
};

export default function useRecently() {
  return useQuery('recentlyPlayed', getRecentlyPlayed);
}
