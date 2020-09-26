// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @app
import InfiniteScroll from 'components/InfiniteScroll';

// @own
import Artists from '../Artists';
import PlayIcon from '../PlayIcon';
import {
  Container,
  ImageStyled,
  TextStyled,
  Track,
  TrackContainer,
  TrackContent,
} from './styles';

function Content({
  onClick,
  total,
  trackId,
  tracksList,
  onNext,
}) {
  return (
    <Container>
      <ImageStyled src={tracksList.images[0].url} size={400} />
      <TrackContainer id="MAIN_ID">
        <InfiniteScroll
          dataLength={tracksList.tracks.length}
          hasMore={total > tracksList.tracks.length}
          next={onNext}
          scrollableTarget="MAIN_ID"
        >
          {tracksList.tracks.map((track) => (
            <Track active={trackId === track.id} onClick={() => onClick(track.id)}>
              <PlayIcon track={track} trackId={trackId} />
              <TrackContent>
                <TextStyled ellipsis type="h3" size={24}>{track.name}</TextStyled>
                <Artists track={track} />
              </TrackContent>
            </Track>
          ))}
        </InfiniteScroll>
      </TrackContainer>
    </Container>
  );
}

Content.defaultProps = {
  trackId: '',
  tracksList: [],
};

Content.propTypes = {
  onClick: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  trackId: PropTypes.string,
  tracksList: PropTypes.array,
};

export default Content;
