import SearchResultPost from './SearchResultPost';
import SearchResultUser from './SearchResultUser';
import { FILTER } from '../constants';
import { User } from '@/types/User';
import { EditedSearchPost } from '@/types/Post';

interface SearchResultsProps {
  searchFilter: string;
  data: (User | EditedSearchPost)[];
}

const SearchResults = ({ searchFilter, data }: SearchResultsProps) => {
  return (
    <>
      {searchFilter === FILTER['POST'] ? (
        <SearchResultPost postData={data as EditedSearchPost[]} />
      ) : (
        <SearchResultUser userData={data as User[]} />
      )}
    </>
  );
};

export default SearchResults;
