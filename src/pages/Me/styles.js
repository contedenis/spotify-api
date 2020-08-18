// @packages
import styled from 'styled-components';

const GridStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 80px 20px 0 20px;
  width: calc(100% - 40px);

  @media (max-width: 720px) {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 20px;
  }
`;

export { GridStyled };
