// @packages
import React from 'react';

// @app
import AlbumCard from 'containers/AlbumCard';
import Text from 'components/Text';
import useRecentlyPlayed from 'services/recently/useRecently';

// @own
import {
  CardContainer,
  ListContainer,
} from './styles';

function ListAlbums() {
  const {
    // status,
    data,
    // error,
    isFetching,
  } = useRecentlyPlayed();

  return (
    <ListContainer>
      <Text type="h3" size={42}>Recently Played Tracks</Text>
      <CardContainer>
        {!isFetching && data.map((item) => (
          <AlbumCard
            name={item.name}
            src={item.image}
            trackName={item.trackName}
          />
        ))}
      </CardContainer>
    </ListContainer>
  );
}

export default ListAlbums;
