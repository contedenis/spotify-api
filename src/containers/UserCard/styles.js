// @packages
import styled from 'styled-components';

const ContainerStyled = styled.div`
  display: flex;
  min-height: 200px;
  min-width: 500px;
  padding: 20px;
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
`;

const CountryText = styled.h5`
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin: 0;
  text-align: right;
`;

export {
  ContainerStyled,
  CountryText,
  NameText,
  TextContainer,
};
