// @packages
import styled, { keyframes } from 'styled-components';

export const ListShow = keyframes`
  0% {
    transform: translate(0, -30px);   
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const ListContainer = styled.div`
  animation: ${ListShow} 1s ease-out;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 40px 20px 40px;
`;

const CardContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

export {
  CardContainer,
  ListContainer,
};
