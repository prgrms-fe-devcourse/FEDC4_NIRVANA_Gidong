import { Icon } from '../Icon';
import { Link } from '../Link';
import { StyledFooter } from './Footer.style';
import useSessionStorage from '@hooks/useSessionStorage';
import { User } from '@/types/User';

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
    { name: 'self_improvement', size: 35, link: '/meditation' },
    { name: 'person', size: 35, link: `/profile/${userData._id}` }
  ];

  return (
    <StyledFooter>
      {iconInfos.map((icon) => (
        <Link
          pageLink={icon.link}
          key={icon.name}>
          <Icon
            name={icon.name}
            size={icon.size}
            color='black'
          />
        </Link>
      ))}
    </StyledFooter>
  );
};
