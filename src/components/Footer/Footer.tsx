import { Icon } from '../Icon';
import { Link } from '../Link';
import { StyledFooter } from './Footer.style';
import { useRecoilValue } from 'recoil';
import { userState } from '@/states/userState';

const iconInfos = [
  { name: 'home', size: 35, link: '/posts' },
  { name: 'self_improvement', size: 35, link: '/meditation' },
  { name: 'person', size: 35, link: '/profile' }
];

export const Footer = () => {
  const userData = useRecoilValue(userState);
  return (
    <StyledFooter>
      {iconInfos.map((icon) => (
        <Link
          pageLink={
            icon.name === 'person'
              ? `${icon.link}/${userData._id}`
              : userData.token
              ? icon.link
              : '/login'
          }
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
