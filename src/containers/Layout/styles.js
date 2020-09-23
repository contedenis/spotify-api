// @packages
import styled from 'styled-components';

const LayoutStyled = styled.div`
  align-items: ${({ logIn }) => (logIn ? 'center' : 'flex-start')};
  color: white;
  display: flex;
  flex-direction: column;
  height: ${({ logIn }) => (logIn && '100vh')};
  justify-content: ${({ logIn }) => (logIn && 'center')};
  width: 100%;
`;

export { LayoutStyled };
