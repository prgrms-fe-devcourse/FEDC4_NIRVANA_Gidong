import { useQueries, useQuery } from '@tanstack/react-query';
import { searchAll } from '@apis/search';
import { getUser } from '@apis/user';
import { EditedPost, Post, User } from '@/types';
import { PostPreview } from '@components/PostPreview';
import filterPostData from '../utils/filterPostData';
import { FILTER } from '../constants';
import { editPostData } from '@pages/posts/utils/editPostData';

interface SearchResultPostProps {
  searchKeyword: string;
  searchFilter: string;
}

const SearchResultPost = ({
  searchKeyword,
  searchFilter
}: SearchResultPostProps) => {
  const { data: postData } = useQuery({
    queryKey: ['search', searchKeyword, searchFilter],
    queryFn: async () => {
      const data = await searchAll(searchKeyword);

      return data;
    },
    enabled: searchKeyword !== '' && searchFilter === FILTER['POST']
  });

  const filteredData = filterPostData(postData || []);

  const postWithUserData = useQueries({
    queries: filteredData.map((element) => {
      return {
        queryKey: ['searchPostUser', element.author],
        queryFn: () => getUser(element.author),
        select: (data: User): Post => {
          return {
            ...element,
            author: data
          };
        },
        enabled: filteredData.length > 0
      };
    })
  });

  const Failed = postWithUserData.filter(
    (element) => !element.isSuccess
  ).length;

  let postPreviewData: EditedPost[] = [];

  if (Failed < 1 && postWithUserData) {
    postPreviewData = editPostData(postWithUserData.map(({ data }) => data));
  }

  return (
    <>
      {Failed < 1 &&
        postPreviewData.map((post) => {
          const { _id, likes, comments } = post;

          return (
            <PostPreview
              post={post}
              key={_id}
              totalLikes={likes.length}
              totalComments={comments.length}
              noneProfile={false}
            />
          );
        })}
    </>
  );
};
export default SearchResultPost;
