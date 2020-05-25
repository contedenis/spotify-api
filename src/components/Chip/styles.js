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
  ${({ ellipsis }) => ellipsis && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis; 
  `};
`;

export {
  ChipStyled,
  TextStyled,
};
