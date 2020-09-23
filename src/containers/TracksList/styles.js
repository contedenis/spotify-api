// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Spinner from 'components/Spinner';
import Text from 'components/Text';

const TracksListStyled = styled.div`
  align-items: center;
  align-items: flex-end;
  display: flex;
  flex: 1;
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

const Container = styled.div`
  background: rgb(0, 0, 0, .5);
  border-radius: 5px;
  display: flex;
  height: 400px;
  width: 100%;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ContentAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Content = styled.div`
  animation: ${ContentAnimation} .5s ease-in;
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

const EmptyStateAnimation = keyframes`
  0%, 50%, 100% { transform: rotate(0); };
  25% { transform: rotate(25deg); };
  75% { transform: rotate(-25deg); };
`;

const EmptyState = styled.div`
  align-items: center;
  animation: ${EmptyStateAnimation} 2s linear infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 768px) {
    animation: unset;
    height: 200px;
  }
`;

const EmptyStateText = styled(Text)`
  font-weight: normal;
`;

const TextStyled = styled(Text)`
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const EmptyImageStyled = styled(Image)`
  @media (max-width: 768px) {
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
  }
`;

const SpinnerStyled = styled(Spinner)`
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export {
  Container,
  Content,
  EmptyImageStyled,
  EmptyState,
  EmptyStateText,
  ImageStyled,
  SpinnerStyled,
  TextStyled,
  Track,
  TrackContainer,
  TrackContent,
  TracksListStyled,
};
