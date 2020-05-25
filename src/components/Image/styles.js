// @packages
import styled from 'styled-components';

const ImageStyled = styled.img`
  border-radius: ${(props) => (props.type === 'circle' && '50%')};
  border: none;
  min-height: ${({ size }) => `${size}px`};
  min-width: ${({ size }) => `${size}px`};
  max-height: ${({ size }) => `${size}px`};
  max-width: ${({ size }) => `${size}px`};
`;

export {
  ImageStyled,
};
