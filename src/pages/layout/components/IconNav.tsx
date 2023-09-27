import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertButton, SearchButton } from '@pages/layout/components';
import { LoginConfirm } from '@components/Confirm';
import useSessionStorage from '@hooks/useSessionStorage';
import { EtcNavContainer } from './IconNav.style';
import { User } from '@/types';

interface EtcNavProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const EtcNav = ({ handleShowSearchBox, showSearchBox }: EtcNavProps) => {
  const [modal, setModal] = useState(false);
  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleShowModal = () => {
    setModal((prev) => !prev);
  };

  const handleClickAlert = () => {
    if (_id && token) {
      navigate('/notice');
    } else {
      setModal((prev) => !prev);
    }
  };

  return (
    <>
      {modal && (
        <LoginConfirm
          handleClickCancel={handleShowModal}
          handleClickConfirm={handleShowModal}
          path={pathname}
        />
      )}
      <EtcNavContainer>
        <SearchButton
          handleClickButton={handleShowSearchBox}
          searchStatus={showSearchBox}
        />
        <AlertButton handleClickAlert={handleClickAlert} />
      </EtcNavContainer>
    </>
  );
};

export default EtcNav;
