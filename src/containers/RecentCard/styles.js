// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Text from 'components/Text';
import Image from 'components/Image';

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

  &:last-child {
    margin-right: 0;
  }
`;

const TextStyled = styled(Text)`
  margin-top: 20px;
  text-align: center;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
  word-break: break-word;
`;

export const ImageAnimated = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: rotateY(360deg);
  }
`;

const ImageStyled = styled(Image)`
  &:hover {
    animation: ${ImageAnimated} .5s ease-in;
  }
`;

export {
  ImageStyled,
  RecentCardStyled,
  TextStyled,
};
