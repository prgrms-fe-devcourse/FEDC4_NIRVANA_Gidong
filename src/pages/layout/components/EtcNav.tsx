import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { AlertButton, SearchButton } from '@pages/layout/components';
import { EtcNavContainer } from './EtcNav.style';

interface EtcNavProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const EtcNav = ({ handleShowSearchBox, showSearchBox }: EtcNavProps) => {
  return (
    <EtcNavContainer>
      <SearchButton
        handleClickButton={handleShowSearchBox}
        showSearchBox={showSearchBox}
      />
      <AlertButton />
      <Link pageLink='/message'>
        <Icon
          name='chat'
          color='white'
          size={23}
        />
      </Link>
    </EtcNavContainer>
  );
};

export default EtcNav;
