// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import AlbumCard from 'containers/AlbumCard';
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
  SliderStyled,
  TextStyled,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
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
          {!isLoading && list.length > 0 && list.map((item) => (
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
