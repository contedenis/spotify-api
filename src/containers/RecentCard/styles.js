// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Text from 'components/Text';

export const RecentCardAnimated = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateZ(360deg);
  }
`;

const RecentCardStyled = styled.div`
  align-items: center;
  background: rgb(255, 255, 255, .1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px 10px;

  &:hover {
    animation: ${RecentCardAnimated} .8s ease-in;
  }
`;

const TextStyled = styled(Text)`
  margin-top: 20px;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
  word-break: break-word;
`;

export {
  RecentCardStyled,
  TextStyled,
};
