// @packages
import React from 'react';

// @app
import RecentCard from 'containers/RecentCard';
import Text from 'components/Text';
import useRecentlyPlayed from 'services/recently/useRecently';

// @own
import {
  CardContainer,
  RecentlyContainer,
} from './styles';

function RecentlyListened() {
  const {
    // status,
    data,
    // error,
    isFetching,
  } = useRecentlyPlayed();

  return (
    <RecentlyContainer>
      <Text type="h3" size={42}>Recently listened albums</Text>
      <CardContainer>
        {!isFetching && data.map((item) => (
          <RecentCard
            name={item.name}
            src={item.image}
          />
        ))}
      </CardContainer>
    </RecentlyContainer>
  );
}

export default RecentlyListened;
