// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Text from 'components/Text';
import { Link } from 'react-router-dom';

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
  width: 30%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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


const ContentImage = styled(Image)`
  border-radius: 5px;
`;

const ContentText = styled(Text)`
  -webkit-box-orient: vertical;  
  -webkit-line-clamp: 3;
  display: -webkit-box;
  overflow: hidden;
  padding: 0 10px;
  text-align: left;
  text-shadow: 2px 2px 2px rgba(0,0,0, 0.2);
`;

const FlipCardInner = styled.div`
  height: 100%;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  width: 100%;
`;

const FlipCard = styled(Link)`
  background-color: transparent;
  cursor: pointer;
  height: 150px;
  margin: 0 15px 15px 0;
  width: 150px;

  &:hover ${FlipCardInner} {
    transform: rotateY(180deg);
  }
`;

const FlipCardFront = styled.div`
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background: rgb(255, 255, 255, .1);
  border-radius: 5px;
  color: black;
  height: 100%;
  position: absolute;
  width: 100%;
`;

const FlipCardBack = styled.div`
  -webkit-backface-visibility: hidden;
  align-items: center;
  backface-visibility: hidden;
  background: rgb(255, 255, 255, .1);
  border-radius: 5px;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  transform: rotateY(180deg);
  width: 100%;
`;

export {
  FlipCard,
  FlipCardInner,
  FlipCardFront,
  FlipCardBack,
  CardContainer,
  ContentImage,
  ContentText,
  ListContainer,
};
