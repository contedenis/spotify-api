// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Text from 'components/Text';

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
  padding: 20px 40px 20px 40px;
  width: 25%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 355px;
  margin-top: 10px;
  width: 100%;
  overflow: hidden;
  transitions: all 2s ease-in;

  &:hover {
    overflow: overlay;

    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-track {
      background : rgb(255, 255, 255, .1);
      border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background : rgb(0,255,255,0.8);
      border-radius: 10px;
      box-shadow:  0 0 6px rgba(0, 0, 0, 0.5);
    } 
  }
`;

const Content = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 15px;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
`;

const ContentImage = styled.img`
  border-radius: 50%;
  width: 50px;
`;

const ContentText = styled(Text)`
  margin-left: 15px;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
  white-space: nowrap;
`;

export {
  CardContainer,
  Content,
  ContentImage,
  ContentText,
  ListContainer,
};
