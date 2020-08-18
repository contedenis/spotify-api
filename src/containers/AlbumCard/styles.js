// @packages
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

// @app
import Text from 'components/Text';
import Image from 'components/Image';

const AlbumCardStyled = styled(Link)`
  align-items: center;
  background: rgb(255, 255, 255, .1);
  border-radius: 5px;
  height: 100%;
  margin-bottom: 10px;
  margin-right: 10px;
  overflow: hidden;
  width: 150px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100px;
  }
`;

const TrackName = styled(Text)`
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 10px 0 10px;
  }
`;

const AlbumName = styled(TrackName)`
  margin-top: 5px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding: 0 10px 10px 10px;
  }
`;

export const ImageAnimated = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
`;

const ImageStyled = styled(Image)`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100px;

  &:hover {
    animation: ${ImageAnimated} .5s ease-in;
  }

  @media (max-width: 768px) {
    min-height: unset;
    min-width: unset;
    max-height: unset;
    max-width: unset;
    width: 100px;
  }
`;

const TextContent = styled.div`
  overflow: hidden;
  padding: 10px 10px 20px 10px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0;
  }
`;

export {
  AlbumCardStyled,
  AlbumName,
  ImageStyled,
  TextContent,
  TrackName,
};
