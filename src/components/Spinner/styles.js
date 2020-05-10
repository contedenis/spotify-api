// @packages
import styled, { keyframes } from 'styled-components';

export const spinnerAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
  width: 100%;

  &:after {
    content: " ";
    display: block;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    margin: 0 auto;
    border-radius: 50%;
    border: 6px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${spinnerAnimation} 1.2s linear infinite;
  }
`;

export {
  SpinnerStyled,
};
