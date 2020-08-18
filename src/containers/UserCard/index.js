// @packages
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

// @app
// import ListDevices from 'containers/ListDevices';
import { getAvailableDevices, getUser } from 'services/session/actions';
import {
  selectUserCountry,
  selectUserDevices,
  selectUserFetching,
  selectUserImage,
  selectUserName,
} from 'services/session/selectors';

// @own
import {
  CardStyled,
  ContainerStyled,
  CountryText,
  ImageStyled,
  NameText,
  TextContainer,
} from './styles';

function UserCard({ onAnimationEnd }) {
  const dispatch = useDispatch();
  const country = useSelector(selectUserCountry);
  const devices = useSelector(selectUserDevices, shallowEqual);
  const loading = useSelector(selectUserFetching);
  const name = useSelector(selectUserName);
  const src = useSelector(selectUserImage);
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(getUser({ token }));
    dispatch(getAvailableDevices({ token }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getAvailableDevices({ token }));
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {!loading && (
        <CardStyled onAnimationEnd={onAnimationEnd}>
          <ContainerStyled>
            <ImageStyled
              size={200}
              src={src}
              type="circle"
            />
            <TextContainer>
              <NameText>{name}</NameText>
              <CountryText>{country}</CountryText>
            </TextContainer>
          </ContainerStyled>
          {/* {false && <ListDevices devices={devices} />} */}
        </CardStyled>
      )}
    </>
  );
}

UserCard.defaultProps = {
  onAnimationEnd: () => undefined,
};

UserCard.propTypes = {
  onAnimationEnd: PropTypes.func,
};

export default UserCard;
