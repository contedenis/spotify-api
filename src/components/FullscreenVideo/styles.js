// @packages
import styled from 'styled-components';

const FullscreenVideoStyled = styled.video`
  height: auto;
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  z-index: -100;
`;

export { FullscreenVideoStyled };
