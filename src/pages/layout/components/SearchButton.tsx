import { Button } from '@components/Button';
import { Icon } from '@components/Icon';
import { ButtonBox } from './SearchButton.style';

interface SearchButton {
  handleClick: () => void;
  search: boolean;
}

const SearchButton = ({ handleClick, search }: SearchButton) => {
  return (
    <ButtonBox>
      <Button
        width={24}
        height={24}
        handleClick={handleClick}>
        <Icon
          name='search'
          color={search ? 'greyLight' : 'white'}
          size={24}
        />
      </Button>
    </ButtonBox>
  );
};

export default SearchButton;
