// @packages
import styled from 'styled-components';
import Computer from '@material-ui/icons/Computer';
import Phone from '@material-ui/icons/PhoneAndroid';

const Container = styled.div`
  background: rgb(255, 255, 255, .1);
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
  padding: 15px 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const iconsStyled = `
  cursor: pointer;

  &:hover {
    fill: black;
  }
`;

const ComputerStyled = styled(Computer)`
  ${iconsStyled};

  @media (max-width: 768px) {
    font-size: 20px !important;
  }
`;

const PhoneStyled = styled(Phone)`
  ${iconsStyled};

  @media (max-width: 768px) {
    font-size: 20px !important;
  }
`;

export {
  ComputerStyled,
  Container,
  PhoneStyled,
};
