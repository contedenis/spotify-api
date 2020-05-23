// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Chip from 'components/Chip';
import Image from 'components/Image';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined';

const PlayIconAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const PlayIconOutlinedAnimation = keyframes`
  to {
    transform: rotate(-360deg);
  }
`;

const iconStyles = `
  background: black;
  border-radius: 50px;
  font-size: 50px !important;
`;

const PlayIconStyled = styled(PlayArrowIcon)`
  animation: ${PlayIconAnimation} .5s ease-in;
  ${iconStyles}
`;

const PlayIconOutlinedStyled = styled(PlayArrowOutlinedIcon)`
  animation: ${PlayIconOutlinedAnimation} .5s ease-in;
  ${iconStyles}
`;

const Container = styled.div`
  background: rgb(0, 0, 0, .5);
  border-radius: 5px;
  display: flex;
  flex: 1;
  min-height: 400px;
  height: 100%;
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
`;

const BackgroundAnimation = keyframes`
  0% { background: radial-gradient(circle, rgba(0,0,0, .0) 25%, rgba(255,255,255, .0)); }
  10% { background: radial-gradient(circle, rgba(0,0,0, .1) 25%, rgba(255,255,255, .0)); }
  20% { background: radial-gradient(circle, rgba(0,0,0, .2) 25%, rgba(255,255,255, .0)); }
  30% { background: radial-gradient(circle, rgba(0,0,0, .3) 25%, rgba(255,255,255, .0)); }
  40% { background: radial-gradient(circle, rgba(0,0,0, .4) 25%, rgba(255,255,255, .0)); }
  50% { background: radial-gradient(circle, rgba(0,0,0, .5) 25%, rgba(255,255,255, .0)); }
  60% { background: radial-gradient(circle, rgba(0,0,0, .6) 25%, rgba(255,255,255, .0)); }
  70% { background: radial-gradient(circle, rgba(0,0,0, .7) 25%, rgba(255,255,255, .0)); }
  80% { background: radial-gradient(circle, rgba(0,0,0, .8) 25%, rgba(255,255,255, .0)); }
  90% { background: radial-gradient(circle, rgba(0,0,0, .9) 25%, rgba(255,255,255, .0)); }
  100% { background: radial-gradient(circle, rgba(0,0,0, 1) 25%, rgba(255,255,255,0) 100%); }
`;

const Track = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 10px 20px;
  
  &:hover {
    animation: ${BackgroundAnimation} .5s ease-in;
    background: radial-gradient(circle, rgba(0,0,0, 1) 25%, rgba(255,255,255,0) 100%);
  }
`;

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ChipsContainer = styled.div`
  display: flex;
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

export const IconAnimation = keyframes`
  0% {  
    opacity: .8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: .8;
    transform: scale(1);
  }
`;

const IconStyled = styled(Image)`
  animation: ${IconAnimation} 1s ease-in infinite;
  border-radius: 50px;
  margin-left: 20px;
`;

const ChipStyled = styled(Chip)`
  margin-right: 5px;
  margin-top: 5px;
`;

export {
  ChipStyled,
  ChipsContainer,
  Container,
  Content,
  IconStyled,
  ImageStyled,
  PlayIconOutlinedStyled,
  PlayIconStyled,
  Track,
  TrackContainer,
  TrackContent,
};
