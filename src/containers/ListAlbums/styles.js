// @packages
import styled, { keyframes } from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  justify-content: flex-end;
  padding: 20px 40px 20px 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
    padding: 0;
    width: 100%;
    overflow: hidden;
  }
`;

const CardContainer = styled.div`
  display: block;
  margin-top: 10px;
  width: 960px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextStyled = styled(Text)`
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const SliderStyled = styled(Slider)`
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0;
  }
  
  @media (max-width: 350px) {
    padding: 0 20px;
  }
`;

export {
  CardContainer,
  ListContainer,
  SliderStyled,
  TextStyled,
};
