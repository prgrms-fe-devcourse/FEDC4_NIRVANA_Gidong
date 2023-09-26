import { User } from '@/types';
import { FollowUserInfo } from '@pages/profile/components';
import { SearchItem } from './SearchResults.style';

interface SearchResultUserProps {
  userData: User[];
}

const SearchResultUser = ({ userData }: SearchResultUserProps) => {
  return (
    <>
      {userData?.map((element: User) => {
        const { _id, fullName, image, email, isOnline } = element;

        return (
          <SearchItem key={_id}>
            <FollowUserInfo
              fullName={fullName}
              image={image}
              email={email}
              isOnline={isOnline}
              id={_id}
            />
          </SearchItem>
        );
      })}
    </>
  );
};
export default SearchResultUser;
