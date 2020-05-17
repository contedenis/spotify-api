// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
  Content,
  ContentImage,
  ContentText,
  ListContainer,
} from './styles';

function Playlists({ getPlaylists, isLoading, list }) { // eslint-disable-line
  useEffect(() => {
    getPlaylists({ params: DEFAULT_PARAMS });
  }, []);

  return (
    <ListContainer>
      <Text type="h3" size={42}>Playlists</Text>
      <CardContainer>
        {!isLoading && list && list.length > 0 && list.map((item) => (
          <Content key={item.id}>
            <ContentImage
              alt={item.type}
              src={item.images[0].url}
            />
            <ContentText type="h5" size={16}>{item.name}</ContentText>
          </Content>
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
};

const mapStateToProps = (state) => ({
  isLoading: selectPlaylistsLoading(state),
  list: selectPlaylists(state),
});

export default connect(mapStateToProps, actions)(Playlists);
