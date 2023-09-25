import { Icon } from '../Icon';
import { Link } from '../Link';
import { StyledFooter, IconContinaer } from './Footer.style';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';
import { useLocation } from 'react-router-dom';

export const Footer = () => {
  const [userData] = useSessionStorage<Pick<User, '_id' | 'token'>>(
    'userData',
    {
      _id: '',
      token: ''
    }
  );

  const iconInfos = [
    { name: 'home', size: 35, link: '/posts' },
    { name: 'spa', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${userData._id}` }
  ];
  const location = useLocation();

  return (
    <StyledFooter>
      {iconInfos.map((icon) => (
        <Link
          setActiveStyle={false}
          pageLink={
            icon.name === 'person'
              ? `${icon.link}`
              : userData.token
              ? icon.link
              : '/login'
          }
          key={icon.name}>
          <IconContinaer>
            <Icon
              name={icon.name}
              size={icon.size}
              fill={icon.link === location.pathname}
              color={icon.link === location.pathname ? 'purpleNormal' : 'black'}
            />
          </IconContinaer>
        </Link>
      ))}
    </StyledFooter>
  );
};
