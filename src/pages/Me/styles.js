// @packages
import styled from 'styled-components';

const GridStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 80px 20px 20px 20px;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 20px;
  }
`;

const GridElement = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  ${({ showRecently }) => (showRecently && `
    justify-content: center;
  `)};

  @media (max-width: 720px) {
    width: 100%;
    flex-direction: column;
    justify-content: unset;
    flex-wrap: nowrap;
    padding: 20px;
  }
`;

const UserCardContainer = styled.div`
  width: 35%

  @media (max-width: 720px) {
    width: 100%;
  }
`;

const ListAlbumsContainer = styled.div`
  width: 65%;

  @media (max-width: 720px) {
    width: 100%;
  }
`;

export {
  GridElement,
  GridStyled,
  UserCardContainer,
  ListAlbumsContainer,
};
