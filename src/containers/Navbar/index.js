// @packages
import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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

function Navbar() {
  const { onLogout } = useAuthContext();
  const [open, setOpen] = useState(false);
  const navbarRef = useRef(null);
  const dispatch = useDispatch();
  const loading = useSelector(selectUserFetching);
  const name = useSelector(selectUserName);
  const src = useSelector(selectUserImage);
  useClickOutside(navbarRef, () => setOpen(false));

  function handleOnClick() {
    dispatch(initLogoutProcess({ key: 'token', onLogout }));
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

export default Navbar;
