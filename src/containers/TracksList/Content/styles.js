// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Text from 'components/Text';

const ContainerAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${ContainerAnimation} .5s ease-in;
  display: flex;
  flex: 1;
  width: 100%;
`;

const Track = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  ${({ active }) => active && `
    background: radial-gradient(circle, rgba(0,0,0, 1) 25%, rgba(255,255,255,0) 100%);
  `};
  
  &:hover {
    background: radial-gradient(circle, rgba(0,0,0, 1) 25%, rgba(255,255,255,0) 100%);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 600px;

  @media (max-width: 768px) {
    margin-left: 10px;
    overflow: hidden;
  }
`;

const ImageStyled = styled(Image)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TrackContainer = styled.div`
  max-height: 400px;
  overflow-y: hidden;
  overflow: hidden;
  width: 100%;

  &:hover {
    overflow: overlay;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background : rgb(255, 255, 255, .1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background : rgb(0,255,255,0.8);
      border-radius: 10px;
      box-shadow:  0 0 6px rgba(0, 0, 0, 0.5);
    } 
  }

  @media (max-width: 768px) {
    overflow: overlay;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 4px;
    }
    &::-webkit-scrollbar-track {
      background : rgb(255, 255, 255, .1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background : rgb(0,255,255,0.8);
      border-radius: 10px;
      box-shadow:  0 0 6px rgba(0, 0, 0, 0.5);
    } 
  }
`;

const TextStyled = styled(Text)`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export {
  Container,
  ImageStyled,
  TextStyled,
  Track,
  TrackContainer,
  TrackContent,
};
