// @packages
import styled from 'styled-components';

// @app
import Spinner from 'components/Spinner';

const TracksListStyled = styled.div`
  align-items: center;
  align-items: flex-end;
  display: flex;
  flex: 1;
  max-width: 65%;

  @media (max-width: 768px) {
    margin-top: 20px;
    max-width: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  background: rgb(0, 0, 0, .5);
  border-radius: 5px;
  display: flex;
  height: 400px;
  width: 100%;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const SpinnerStyled = styled(Spinner)`
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export {
  Container,
  SpinnerStyled,
  TracksListStyled,
};
