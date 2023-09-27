import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import type { User } from '@/types';

import { AlertButton, SearchButton } from '@pages/layout/components';
import useSessionStorage from '@hooks/useSessionStorage';
import { LoginConfirm } from '@components/Confirm';
import { EtcNavContainer } from './IconNav.style';

interface EtcNavProps {
  handleOpenSearchBox: () => void;
  showSearchBox: boolean;
}

const EtcNav = ({ handleOpenSearchBox, showSearchBox }: EtcNavProps) => {
  const [loginConfirm, setLoginConfirm] = useState(false);
  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleShowLoginConfirm = () => {
    setLoginConfirm((prev) => !prev);
  };

  const handleClickAlert = () => {
    if (_id && token) {
      navigate('/notice');
    } else {
      setLoginConfirm((prev) => !prev);
    }
  };

  return (
    <>
      {loginConfirm && (
        <LoginConfirm
          handleClickCancel={handleShowLoginConfirm}
          handleClickConfirm={handleShowLoginConfirm}
          path={pathname}
        />
      )}
      <EtcNavContainer>
        <SearchButton
          handleClickButton={handleOpenSearchBox}
          searchStatus={showSearchBox}
        />
        <AlertButton handleClickAlert={handleClickAlert} />
      </EtcNavContainer>
    </>
  );
};

export default EtcNav;
