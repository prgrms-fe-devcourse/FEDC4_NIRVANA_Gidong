import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { ButtonBox } from './SearchButton.style';

interface SearchButton {
  handleClickButton?: () => void;
  searchStatus: boolean;
}

const SearchButton = ({ handleClickButton, searchStatus }: SearchButton) => {
  return (
    <ButtonBox>
      <Button
        width={24}
        height={24}
        handleClick={handleClickButton}>
        <Icon
          name='search'
          color={searchStatus ? 'greyLight' : 'white'}
          size={24}
        />
      </Button>
    </ButtonBox>
  );
};

export default SearchButton;
