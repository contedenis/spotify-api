// @packages
import styled from 'styled-components';

// @app
import Chip from 'components/Chip';
import Text from 'components/Text';

const AndMoreText = styled(Text)`
  padding: 0 10px;
`;

const ChipStyled = styled(Chip)`
  margin-right: 5px;
  margin-top: 5px;
`;

const ChipsContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export {
  AndMoreText,
  ChipStyled,
  ChipsContainer,
};
