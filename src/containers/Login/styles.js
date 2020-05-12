// @packages
import styled, { keyframes } from 'styled-components';

export const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ImageStyled = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${AppLogoSpin} infinite 20s linear;
  }
`;

export const LogInShow = keyframes`
  0% {
    transform: translate(0, -200px);   
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const LogIn = styled.div`
  align-items: center;
  animation: ${LogInShow} .5s ease-in;
  display: flex;
  flex-direction: column;
`;

export {
  ImageStyled,
  LogIn,
};
