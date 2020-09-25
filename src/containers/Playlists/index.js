// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @app
import {
  selectPlaylistsLoading,
  selectPlaylists,
} from 'services/playlists/selectors';
import { getPlaylists } from 'services/playlists/actions';
import { DEFAULT_PARAMS } from 'services/playlists/constants';
import Spinner from 'components/Spinner';

// @own
import {
  CardContainer,
  ContentImage,
  ContentText,
  FlipCard,
  FlipCardBack,
  FlipCardFront,
  FlipCardInner,
  ListContainer,
  TextStyled,
} from './styles';

function Playlists({ onAnimationEnd }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectPlaylistsLoading);
  const list = useSelector(selectPlaylists);

  useEffect(() => {
    dispatch(getPlaylists({ params: DEFAULT_PARAMS }));
  }, [getPlaylists]);

  return (
    <ListContainer onAnimationEnd={onAnimationEnd}>
      <TextStyled type="h3" size={42}>
        Playlists
      </TextStyled>
      <CardContainer>
        <Spinner loading={isLoading}>
          {!isLoading && list && list.length > 0 && list.map((item) => (
            <FlipCard key={item.id} to={`/playlist?id=${item.id}`}>
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
        </Spinner>
      </CardContainer>
    </ListContainer>
  );
}

Playlists.propTypes = {
  onAnimationEnd: PropTypes.func.isRequired,
};

export default Playlists;
