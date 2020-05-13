// @packages
import styled from 'styled-components';

const ImageStyled = styled.img`
  border-radius: ${(props) => (props.type === 'circle' && '50%')};
  border: none;
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
`;

export {
  ImageStyled,
};
