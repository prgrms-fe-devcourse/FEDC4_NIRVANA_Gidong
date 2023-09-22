import { useQuery } from '@tanstack/react-query';
import { searchUser } from '@apis/search';
import { User } from '@/types';
import { FollowUserInfo } from '@pages/profile/components';
import { SearchItem } from './SearchMain.style';

interface SearchResultUserProps {
  searchKeyword: string;
  searchFilter: string;
}

const SearchResultUser = ({
  searchKeyword,
  searchFilter
}: SearchResultUserProps) => {
  const { data: userData } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = await searchUser(searchKeyword);
      return data;
    },
    enabled: searchKeyword !== '' && searchFilter === 'user'
  });

  return (
    <>
      {searchFilter === 'user' &&
        userData?.map((element: User) => {
          const { _id, fullName, image, email, isOnline } = element;

          return (
            <SearchItem key={_id}>
              <FollowUserInfo
                fullName={fullName}
                image={image}
                email={email}
                isOnline={isOnline}
              />
            </SearchItem>
          );
        })}
    </>
  );
};
export default SearchResultUser;
