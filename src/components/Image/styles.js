// @packages
import styled from 'styled-components';

const ImageStyled = styled.img`
  border-radius: ${(props) => (props.type === 'circle' ? '50%' : '5px')};
  border: none;
  height: 200px;
  width: 200px;
`;

export {
  ImageStyled,
};
