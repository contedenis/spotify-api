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

const ButtonStyled = styled.button`
  background-color: #1db954;
  border-color: #1aa34a;
  border-radius: 500px;
  border-width: 0;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 1;
  min-width: 160px;
  padding: 11px 32px 9px;
  text-decoration: none;
  text-transform: uppercase;
  white-space: normal;
`;


export {
  ButtonStyled,
  AppStyled,
  HeaderStyled,
  ImageStyled,
};
