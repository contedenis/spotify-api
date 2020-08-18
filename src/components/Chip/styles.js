// @packages
import styled from 'styled-components';

// @app
import Text from 'components/Text';

const ChipStyled = styled.div`
  border-radius: 25px;
  background: rgb(255,255,255, 0.8);
  padding: 5px 10px;
  width: fit-content;
`;

const TextStyled = styled(Text)`
  @media (max-width: 768px) {
    font-size: 8px;
  }
`;

export {
  ChipStyled,
  TextStyled,
};
