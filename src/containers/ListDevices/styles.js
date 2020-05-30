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
`;

const iconsStyled = `
  cursor: pointer;

  &:hover {
    fill: black;
  }
`;

const ComputerStyled = styled(Computer)`
  ${iconsStyled};
`;

const PhoneStyled = styled(Phone)`
  ${iconsStyled};
`;

export {
  ComputerStyled,
  Container,
  PhoneStyled,
};
