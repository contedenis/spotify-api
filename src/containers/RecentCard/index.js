// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  ImageStyled,
  RecentCardStyled,
  TextStyled,
} from './styles';

function RecentCard({ src, name }) {
  return (
    <RecentCardStyled>
      <ImageStyled
        size={150}
        src={src}
        type="circle"
      />
      <TextStyled type="h4" color="white" size={16}>
        {name}
      </TextStyled>
    </RecentCardStyled>
  );
}

RecentCard.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default RecentCard;
