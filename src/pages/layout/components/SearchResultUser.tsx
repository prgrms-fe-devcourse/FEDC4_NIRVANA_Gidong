import { useQuery } from '@tanstack/react-query';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { searchUser } from '@apis/search';
import { FollowUserInfo } from '@pages/profile/components';
import SearchNoResult from './SearchNoResult';
import { SearchItem } from './SearchBody.style';
import { User } from '@/types';
import { FILTER } from '../constants';
import { openSearch } from '../states/openSearch';

interface SearchResultUserProps {
  searchKeyword: string;
  searchFilter: string;
}

const SearchResultUser = ({
  searchKeyword,
  searchFilter
}: SearchResultUserProps) => {
  const navigate = useNavigate();
  const setResultShown = useSetRecoilState(openSearch);

  const { data: userData, isSuccess } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = await searchUser(searchKeyword);
      return data;
    },
    suspense: true,
    enabled: searchKeyword !== '' && searchFilter === FILTER['USER']
  });

  return (
    <>
      {isSuccess &&
        (userData.length > 0 ? (
          userData.map((element: User) => {
            const { _id, fullName, image, email, isOnline } = element;

            const handleClickUser = () => {
              setResultShown(false);
              navigate(`/profile/${_id}`);
            };

            return (
              <SearchItem key={_id}>
                <FollowUserInfo
                  fullName={fullName}
                  image={image}
                  email={email}
                  isOnline={isOnline}
                  avatarSize={50}
                  handleClickUser={handleClickUser}
                />
              </SearchItem>
            );
          })
        ) : (
          <SearchNoResult />
        ))}
    </>
  );
};
export default SearchResultUser;
