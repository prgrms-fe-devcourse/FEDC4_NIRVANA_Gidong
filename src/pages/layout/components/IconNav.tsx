import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertButton, SearchButton } from '@pages/layout/components';
import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
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

  const handleShowModal = () => {
    setModal((prev) => !prev);
  };

  const handleClickAlert = () => {
    if (_id && token) navigate('/notice');
    else setModal((prev) => !prev);
  };

  return (
    <>
      {modal && (
        <LoginConfirm
          handleClickCancel={handleShowModal}
          handleClickConfirm={handleShowModal}
          location={'notice'}
        />
      )}
      <EtcNavContainer>
        <SearchButton
          handleClickButton={handleShowSearchBox}
          searchStatus={showSearchBox}
        />
        <AlertButton handleClickAlert={handleClickAlert} />
        <Link pageLink='/message'>
          <Icon
            name='chat'
            color='white'
            size={23}
          />
        </Link>
      </EtcNavContainer>
    </>
  );
};

export default EtcNav;
