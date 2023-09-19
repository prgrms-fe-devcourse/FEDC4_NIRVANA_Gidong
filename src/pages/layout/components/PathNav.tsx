import { Link } from '@components/Link';
import { Icon } from '@components/Icon';
import { Logo, PathNavContainer } from './PathNav.style';

interface PathNavProps {
  backLink?: string;
}

const PathNav = ({ backLink }: PathNavProps) => {
  return (
    <PathNavContainer>
      {backLink ? (
        <Link pageLink=''>
          <Icon
            name='arrow_back_ios'
            color='white'
            size={23}
          />
        </Link>
      ) : (
        <Logo />
      )}
    </PathNavContainer>
  );
};
export default PathNav;
