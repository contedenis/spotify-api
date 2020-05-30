// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import Image from 'components/Image';
import ListDevices from 'containers/ListDevices';
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
  NameText,
  TextContainer,
} from './styles';

function UserCard({
  country,
  devices,
  loading,
  name,
  onAnimationEnd,
  src,
}) {
  return (
    <>
      {!loading && (
        <CardStyled onAnimationEnd={onAnimationEnd}>
          <ContainerStyled>
            <Image size={200} src={src} type="circle" />
            <TextContainer>
              <NameText>{name}</NameText>
              <CountryText>{country}</CountryText>
            </TextContainer>
          </ContainerStyled>
          <ListDevices devices={devices} />
        </CardStyled>
      )}
    </>
  );
}

UserCard.defaultProps = {
  onAnimationEnd: () => undefined,
};

UserCard.propTypes = {
  country: PropTypes.string.isRequired,
  devices: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onAnimationEnd: PropTypes.func,
  src: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  country: selectUserCountry(state),
  devices: selectUserDevices(state),
  loading: selectUserFetching(state),
  name: selectUserName(state),
  src: selectUserImage(state),
});

export default connect(mapStateToProps, null)(UserCard);
