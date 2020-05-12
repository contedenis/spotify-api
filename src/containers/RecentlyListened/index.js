// @packages
import React from 'react';

// @app
import useRecentlyPlayed from 'services/recently/useRecently';
import RecentCard from 'containers/RecentCard';

// @own
import { RecentlyContainer } from './styles';

function RecentlyListened() {
  const {
    // status,
    data,
    // error,
    isFetching,
  } = useRecentlyPlayed();

  return (
    <RecentlyContainer>
      {!isFetching && data.map((item) => (
        <RecentCard
          name={item.name}
          src={item.image}
        />
      ))}
    </RecentlyContainer>
  );
}

export default RecentlyListened;
