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
  color: #123622;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
`;

const CountryText = styled.h5`
  color: #123622;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  text-align: right;
`;

export {
  ContainerStyled,
  CountryText,
  NameText,
  TextContainer,
};
