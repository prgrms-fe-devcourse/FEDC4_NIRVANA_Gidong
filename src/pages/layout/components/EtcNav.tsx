import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { AlertButton, SearchButton } from '@components/Header';
import { EctNavContainer } from './EtcNav.style';

interface EctNavProps {
  handleShowSearch: () => void;
  search: boolean;
}

const EctNav = ({ handleShowSearch, search }: EctNavProps) => {
  return (
    <EctNavContainer>
      <SearchButton
        handleClick={handleShowSearch}
        search={search}
      />
      <AlertButton />
      <Link pageLink='/message'>
        <Icon
          name='chat'
          color='white'
          size={23}
        />
      </Link>
    </EctNavContainer>
  );
};

export default EctNav;
