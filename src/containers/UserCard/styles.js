// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';

export const CardShow = keyframes`
  0% {
    transform: scale(0.2);   
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const CardStyled = styled.div`
  animation: ${CardShow} .8s ease-out;
  background: transparent;
  padding: 20px 40px 20px 40px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;

const ContainerStyled = styled.div`
  display: flex;
  min-height: 200px;
  min-width: 500px;
  padding: 20px;

  @media (max-width: 480px) {
    padding: 0;
    min-width: unset;
    min-height: unset;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 20px;
`;

const NameText = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 40px;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CountryText = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin: 0;
  text-align: right;

  @media (max-width: 480px) {
    font-size: 9px;
  }
`;

const ImageStyled = styled(Image)`
  @media (max-width: 480px) {
    max-height: 100px;
    max-width: 100px;
    min-height: 100px;
    min-width: 100px;
  }
`;

export {
  CardStyled,
  ContainerStyled,
  CountryText,
  ImageStyled,
  NameText,
  TextContainer,
};
