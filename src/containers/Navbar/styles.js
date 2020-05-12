// @packages
import styled, { keyframes } from 'styled-components';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
`;

export const ChipShow = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
`;

const Chip = styled.div`
  animation: ${ChipShow} .5s ease-in;
  background: rgb(232, 232, 232, 0.5);
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  margin: 20px 20px 20px 5px;
  min-width: 100px;
  padding: 5px 10px 5px 5px;
  position: relative;
  transition: background .2s ease-in;

  &:hover {
    background: rgb(232, 232, 232, 0.8);
  }

`;

const NameText = styled.h5`
  align-items: center;
  color: #123622;
  display: flex;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  justify-content: center;
  margin: 0;
  margin-left: 10px;
`;

export const PopupShow = keyframes`
  from {
    top: 65px;
    opacity: 0;
  }
  to {
    top: 75px;
    opacity: 1;
  }
`;

const Popup = styled.div`
  animation: ${PopupShow} .2s;
  background: #1C2833;
  border-radius: 5px;
  border: 0;
  position: absolute;
  right: 20px;
  top: 75px;
  width: 100px;
`;

const PopupText = styled.h5`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin: 0px;
  padding: 10px;
  text-align: center;
`;

export {
  Chip,
  NameText,
  NavbarStyled,
  Popup,
  PopupText,
};
