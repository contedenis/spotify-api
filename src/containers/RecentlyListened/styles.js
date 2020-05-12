// @packages
import styled, { keyframes } from 'styled-components';

export const RecentlyShow = keyframes`
  0% {
    transform: translate(0, -30px);   
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
  display: flex;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  width: 100%;
`;

export { RecentlyContainer };
