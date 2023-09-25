import { Icon } from '@components/Icon';
import { Link } from '@components/Link';
import { AlertButton, SearchButton } from '@pages/layout/components';
import { EtcNavContainer } from './IconNav.style';

interface EtcNavProps {
  handleShowSearchBox: () => void;
  showSearchBox: boolean;
}

const EtcNav = ({ handleShowSearchBox, showSearchBox }: EtcNavProps) => {
  return (
    <EtcNavContainer>
      <SearchButton
        handleClickButton={handleShowSearchBox}
        searchStatus={showSearchBox}
      />
      <AlertButton />
    </EtcNavContainer>
  );
};

export default EtcNav;
