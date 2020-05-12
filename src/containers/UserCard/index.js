// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import Image from 'components/Image';
import {
  selectUserCountry,
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
  loading,
  name,
  src,
}) {
  return (
    <>
      {!loading && (
        <CardStyled>
          <ContainerStyled>
            <Image size={200} src={src} type="circle" />
            <TextContainer>
              <NameText>{name}</NameText>
              <CountryText>{country}</CountryText>
            </TextContainer>
          </ContainerStyled>
        </CardStyled>
      )}
    </>
  );
}

UserCard.propTypes = {
  country: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  country: selectUserCountry(state),
  loading: selectUserFetching(state),
  name: selectUserName(state),
  src: selectUserImage(state),
});

export default connect(mapStateToProps, null)(UserCard);
