// @packages
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import Card from 'components/Card';
import Image from 'components/Image';
import {
  selectUserCountry,
  selectUserImage,
  selectUserName,
} from 'services/session/selectors';

// @own
import {
  ContainerStyled,
  CountryText,
  NameText,
  TextContainer,
} from './styles';

function UserCard({ country, name, src }) {
  return (
    <Card>
      <ContainerStyled>
        <Image src={src} type="circle" />
        <TextContainer>
          <NameText>{name}</NameText>
          <CountryText>{country}</CountryText>
        </TextContainer>
      </ContainerStyled>
    </Card>
  );
}

UserCard.propTypes = {
  country: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  country: selectUserCountry(state),
  name: selectUserName(state),
  src: selectUserImage(state),
});

export default connect(mapStateToProps, null)(UserCard);
