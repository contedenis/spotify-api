// @packages
import styled, { keyframes } from 'styled-components';

export const RecentlyShow = keyframes`
  0% {
    transform: translate(20px, 0);   
    opacity: 0;
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
`;

const RecentlyContainer = styled.div`
  animation: ${RecentlyShow} .5s ease-out;
  border-radius: 5px;
  border: 1px solid white;
  padding: 20px;
  width: 100%;
`;

export { RecentlyContainer };
