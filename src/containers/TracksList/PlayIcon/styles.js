// @packages
import styled, { keyframes } from 'styled-components';
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

  @media (max-width: 480px) {
    height: 0.7em !important;
    width: 0.7em !important;
  }
`;

const PlayIconStyled = styled(PlayArrowIcon)`
  animation: ${PlayIconAnimation} .5s ease-in;
  ${iconStyles}
`;

const PlayIconOutlinedStyled = styled(PlayArrowOutlinedIcon)`
  animation: ${PlayIconOutlinedAnimation} .5s ease-in;
  ${iconStyles}
`;

export {
  PlayIconStyled,
  PlayIconOutlinedStyled,
};
