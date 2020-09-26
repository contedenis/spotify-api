// @packages
import styled, { keyframes } from 'styled-components';

// @app
import Image from 'components/Image';
import Text from 'components/Text';

const EmptyStateAnimation = keyframes`
  0%, 50%, 100% { transform: rotate(0); };
  25% { transform: rotate(25deg); };
  75% { transform: rotate(-25deg); };
`;

const Container = styled.div`
  align-items: center;
  animation: ${EmptyStateAnimation} 2s linear infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  width: fit-content;

  @media (max-width: 768px) {
    animation: unset;
    height: 200px;
  }
`;

const EmptyText = styled(Text)`
  font-weight: normal;
`;

const EmptyImage = styled(Image)`
  @media (max-width: 768px) {
    min-height: 100px;
    min-width: 100px;
    max-height: 100px;
    max-width: 100px;
  }
`;

export {
  Container,
  EmptyImage,
  EmptyText,
};
