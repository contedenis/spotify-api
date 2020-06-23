// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Text from 'components/Text';

const TracksListStyled = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  width: 65%;
`;

const Container = styled.div`
  background: rgb(0, 0, 0, .5);
  border-radius: 5px;
  display: flex;
  height: 400px;
  width: 100%;
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
  
  &:hover {
    background: radial-gradient(circle, rgba(0,0,0, 1) 25%, rgba(255,255,255,0) 100%);
  }
`;

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  max-width: 600px;
`;

const ImageStyled = styled(Image)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const TrackContainer = styled.div`
  max-height: 400px;
  overflow-y: hidden;
  overflow: hidden;
  width: 100%;

  &:hover {
    overflow: overlay;

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
`;

const EmptyStateText = styled(Text)`
  font-weight: normal;
`;

export {
  Container,
  Content,
  EmptyState,
  EmptyStateText,
  ImageStyled,
  Track,
  TrackContainer,
  TrackContent,
  TracksListStyled,
};
