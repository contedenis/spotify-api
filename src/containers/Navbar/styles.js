// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Spinner from 'components/Spinner';

const NavbarStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
  }
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

  @media (max-width: 768px) {
    min-width: fit-content;
    padding: 5px;
  }
`;

const ImageStyled = styled(Image)`
  @media (max-width: 768px) {
    max-height: 15px;
    max-width: 15px;
    min-height: 15px;
    min-width: 15px;
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

  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export const PopupShow = keyframes`
  from {
    top: 45px;
    opacity: 0;
  }
  to {
    top: 50px;
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

  @media (max-width: 480px) {
    top: 50px;
    width: fit-content;
  }
`;

const PopupText = styled.h5`
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin: 0px;
  padding: 10px;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 8px;
  }
`;

const SpinnerStyled = styled(Spinner)`
  &:after {
    @media (max-width: 480px) {
      height: 5px;
      width: 5px;
    }
  }
`;

export {
  Chip,
  ImageStyled,
  NameText,
  NavbarStyled,
  Popup,
  PopupText,
  SpinnerStyled,
};
