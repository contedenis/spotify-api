// @packages
import styled from 'styled-components';

const TextStyled = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ size }) => `${size}px`};
  margin: 0;
  ${({ ellipsis }) => ellipsis && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  `};
`;

export {
  TextStyled,
};
