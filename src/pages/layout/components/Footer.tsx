import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSessionStorage from '@hooks/useSessionStorage';
import { LoginConfirm } from '@components/Confirm';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import { StyledFooter } from './Footer.style';
import { User } from '@/types/User';

const Footer = () => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const handleShowModal = () => {
    setModal((prev) => !prev);
  };

  const handleClickButton = (path: string) => {
    if ((_id && token) || path === '/posts') navigate(path);
    else setModal((prev) => !prev);
  };

  const iconInfos = [
    { name: 'home', size: 35, link: '/posts' },
    { name: 'spa', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${_id}` }
  ];

  return (
    <>
      {modal && (
        <LoginConfirm
          handleClickCancel={handleShowModal}
          handleClickConfirm={handleShowModal}
          path={pathname}
        />
      )}
      <StyledFooter>
        {iconInfos.map(({ name, size, link }) => (
          <Button
            key={name}
            width={35}
            height={35}
            handleClick={() => {
              handleClickButton(link);
            }}
            borderRadius={0}
            border='none'
            padding={false}
            backgroundColor='transparent'>
            <Icon
              name={name}
              size={size}
              fill={link === pathname}
              color={link === pathname ? 'purpleNormal' : 'black'}
            />
          </Button>
        ))}
      </StyledFooter>
    </>
  );
};

export default Footer;
