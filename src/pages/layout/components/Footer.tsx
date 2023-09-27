import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useSessionStorage from '@hooks/useSessionStorage';
import { LoginConfirm } from '@components/Confirm';
import { Icon } from '@components/Icon';
import { Button } from '@components/Button';
import { StyledFooter } from './Footer.style';
import { User } from '@/types/User';
import { useRecoilState } from 'recoil';
import { openSearch } from '../states/openSearch';

const Footer = () => {
  const [loginConfirm, setLoginConfirm] = useState(false);
  const [showSearchBox, setShowSearchBox] = useRecoilState(openSearch);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [{ _id, token }] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const handleShowLoginConfirm = () => {
    setLoginConfirm((prev) => !prev);
  };

  const handleClickButton = (path: string) => {
    if (showSearchBox) {
      setShowSearchBox(false);
    }

    if ((_id && token) || path === '/posts') {
      navigate(path);
    } else {
      setLoginConfirm((prev) => !prev);
    }
  };

  const iconInfos = [
    { name: 'home', size: 35, link: '/posts' },
    { name: 'spa', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${_id}` }
  ];

  return (
    <>
      {loginConfirm && (
        <LoginConfirm
          handleClickCancel={handleShowLoginConfirm}
          handleClickConfirm={handleShowLoginConfirm}
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
