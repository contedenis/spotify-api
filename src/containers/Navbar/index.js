// @packages
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @app
import {
  selectUserFetching,
  selectUserImage,
  selectUserName,
} from 'services/session/selectors';
import useClickOutside from 'hooks/useClickOutside';
import { initLogoutProcess } from 'services/session/actions';
import { useAuthContext } from 'components/Context/Auth';

// @own
import {
  Chip,
  ImageStyled,
  NameText,
  NavbarStyled,
  Popup,
  PopupText,
  SpinnerStyled,
} from './styles';

function Navbar({
  initLogoutProcess,
  loading,
  name,
  src,
}) {
  const { onLogout } = useAuthContext();
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  useClickOutside(navbarRef, () => setOpen(false));

  function handleOnClick() {
    initLogoutProcess({ key: 'token', onLogout });
  }

  function handleOnChipClick() {
    setOpen(!open);
  }

  return (
    <NavbarStyled>
      <Chip onClick={handleOnChipClick}>
        <SpinnerStyled loading={loading} size={15}>
          <ImageStyled src={src} size={30} type="circle" />
          <NameText>{name}</NameText>
        </SpinnerStyled>
      </Chip>
      {open && (
        <Popup onClick={handleOnClick} ref={navbarRef}>
          <PopupText>
            Log out
          </PopupText>
        </Popup>
      )}
    </NavbarStyled>
  );
}

Navbar.propTypes = {
  initLogoutProcess: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  loading: selectUserFetching(state),
  name: selectUserName(state),
  src: selectUserImage(state),
});

export default connect(mapStateToProps, { initLogoutProcess })(Navbar);
