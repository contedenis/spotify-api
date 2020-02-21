// @packages
import styled, { keyframes } from 'styled-components';

const AppStyled = styled.div`
  text-align: center;
`;

const HeaderStyled = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

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

const AStyled = styled.a`
  color: #61dafb;
`;


export {
  AStyled,
  AppStyled,
  HeaderStyled,
  ImageStyled,
};
