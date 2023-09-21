import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { ButtonBox } from './SearchButton.style';

interface SearchButton {
  handleClickButton?: () => void;
  showSearchBox: boolean;
}

const SearchButton = ({ handleClickButton, showSearchBox }: SearchButton) => {
  return (
    <ButtonBox>
      <Button
        width={24}
        height={24}
        handleClick={handleClickButton}>
        <Icon
          name='search'
          color={showSearchBox ? 'greyLight' : 'white'}
          size={24}
        />
      </Button>
    </ButtonBox>
  );
};

export default SearchButton;
