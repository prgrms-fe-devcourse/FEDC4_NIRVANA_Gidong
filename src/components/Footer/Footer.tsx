import { Icon } from '../Icon';
import { Link } from '../Link';
import { StyledFooter } from './Footer.style';

const iconInfos = [
  { name: 'home', size: 35, link: '/' },
  { name: 'self_improvement', size: 35, link: '/meditation' },
  { name: 'person', size: 35, link: '/profile:userId' }
];

export const Footer = () => {
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
