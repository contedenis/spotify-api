// @packages
import React from 'react';
import PropTypes from 'prop-types';

// @own
import {
  Container,
  ComputerStyled,
  PhoneStyled,
} from './styles';

function ListDevices({ devices }) {
  return (
    <Container>
      {devices.map((device) => {
        if (device.type === 'Computer') {
          return <ComputerStyled style={{ fontSize: '40px ' }} />;
        } if (device.type === 'Tablet' || device.type === 'Smartphone') {
          return <PhoneStyled style={{ fontSize: '40px ' }} />;
        }
      })}
    </Container>
  );
}

ListDevices.propTypes = {
  devices: PropTypes.array.isRequired,
};

export default ListDevices;
