// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// @app
import AlbumCard from 'containers/AlbumCard';
import {
  selectRecentlyListenedLoading,
  selectRecentlyListened,
} from 'services/recentlyListened/selectors';
import { getRecentlyListened } from 'services/recentlyListened/actions';
import { DEFAULT_PARAMS } from 'services/recentlyListened/constants';

// @own
import {
  CardContainer,
  ListContainer,
  SliderStyled,
  TextStyled,
} from './styles';

function ListAlbums({ onAnimationEnd }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectRecentlyListenedLoading);
  const list = useSelector(selectRecentlyListened);

  useEffect(() => {
    dispatch(getRecentlyListened({ params: DEFAULT_PARAMS }));
  }, [getRecentlyListened]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ListContainer onAnimationEnd={onAnimationEnd}>
      <TextStyled type="h3" size={42}>
        Recently Played Tracks
      </TextStyled>
      <CardContainer>
        <SliderStyled {...settings}>
          {!isLoading && list?.map((item) => (
            <AlbumCard
              albumId={item.albumId}
              contextUri={item.albumContextUri}
              key={item.albumId}
              name={item.albumName}
              src={item.albumImage}
              trackName={item.trackName}
            />
          ))}
        </SliderStyled>
      </CardContainer>
    </ListContainer>
  );
}

ListAlbums.propTypes = {
  onAnimationEnd: PropTypes.func.isRequired,
};

export default ListAlbums;
