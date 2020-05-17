// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import AlbumCard from 'containers/AlbumCard';
import Text from 'components/Text';
import {
  selectRecentlyListenedLoading,
  selectRecentlyListened,
} from 'services/recentlyListened/selectors';
import * as actions from 'services/recentlyListened/actions';
import { DEFAULT_PARAMS } from 'services/recentlyListened/constants';

// @own
import {
  CardContainer,
  ListContainer,
} from './styles';

function ListAlbums({
  getRecentlyListened,
  isLoading,
  list,
  onAnimationEnd,
}) {
  useEffect(() => {
    getRecentlyListened({ params: DEFAULT_PARAMS });
  }, []);

  return (
    <ListContainer onAnimationEnd={onAnimationEnd}>
      <Text type="h3" size={42}>Recently Played Tracks</Text>
      <CardContainer>
        {!isLoading && list.length > 0 && list.map((item) => (
          <AlbumCard
            name={item.name}
            src={item.image}
            trackName={item.trackName}
            contextUri={item.contextUri}
          />
        ))}
      </CardContainer>
    </ListContainer>
  );
}

ListAlbums.defaultProps = {
  isLoading: false,
  list: [],
};

ListAlbums.propTypes = {
  getRecentlyListened: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  onAnimationEnd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: selectRecentlyListenedLoading(state),
  list: selectRecentlyListened(state),
});

export default connect(mapStateToProps, actions)(ListAlbums);
