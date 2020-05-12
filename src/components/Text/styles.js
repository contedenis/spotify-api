// @packages
import styled from 'styled-components';

const TextStyled = styled.h1`
  color: ${({ color }) => color};
  margin: 0;
  size: ${({ size }) => `${size}px`};
`;

export {
  TextStyled,
};
