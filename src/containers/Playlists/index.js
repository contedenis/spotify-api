// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

// @app
import Text from 'components/Text';
import {
  selectPlaylistsLoading,
  selectPlaylists,
} from 'services/playlists/selectors';
import * as actions from 'services/playlists/actions';
import { DEFAULT_PARAMS } from 'services/playlists/constants';

// @own
import {
  CardContainer,
  FlipCard,
  FlipCardFront,
  FlipCardInner,
  FlipCardBack,
  ContentImage,
  ContentText,
  ListContainer,
} from './styles';

function Playlists({
  getPlaylists,
  isLoading,
  list,
  onAnimationEnd,
}) {
  const { path } = useRouteMatch();
  useEffect(() => {
    getPlaylists({ params: DEFAULT_PARAMS });
  }, []);

  return (
    <ListContainer onAnimationEnd={onAnimationEnd}>
      <Text type="h3" size={42}>Playlists</Text>
      <CardContainer>
        {!isLoading && list && list.length > 0 && list.map((item) => (
          <FlipCard key={item.id} to={`${path}/playlist?id=${item.id}`}>
            <FlipCardInner>
              <FlipCardFront>
                <ContentImage
                  alt={item.type}
                  src={item.images[0].url}
                  size={150}
                />
              </FlipCardFront>
              <FlipCardBack>
                <ContentText type="h5" size={16}>{item.name}</ContentText>
              </FlipCardBack>
            </FlipCardInner>
          </FlipCard>
        ))}
      </CardContainer>
    </ListContainer>
  );
}

Playlists.defaultProps = {
  isLoading: false,
  list: [],
};

Playlists.propTypes = {
  getPlaylists: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  list: PropTypes.array,
  onAnimationEnd: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: selectPlaylistsLoading(state),
  list: selectPlaylists(state),
});

export default connect(mapStateToProps, actions)(Playlists);
