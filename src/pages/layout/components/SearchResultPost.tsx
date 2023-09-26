import { useQueries } from '@tanstack/react-query';
import { getUser } from '@apis/user';
import { User } from '@/types';
import { PostPreview } from '@components/PostPreview';
import filterPostData from '../utils/filterPostData';
import { EditedSearchPost, Post, EditedPost } from '@/types';
import { editPostData } from '@pages/posts/utils/editPostData';

type AddedPostData = Pick<
  EditedPost,
  | '_id'
  | 'image'
  | 'content'
  | 'author'
  | 'createdAt'
  | 'meditationTime'
  | 'likes'
  | 'comments'
>[];

interface SearchResultPostProps {
  postData: EditedSearchPost[];
}

const SearchResultPost = ({ postData }: SearchResultPostProps) => {
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

  let addedResultData: AddedPostData = [];

  if (Failed < 1) {
    addedResultData = editPostData(postWithUserData.map(({ data }) => data));
  }

  return (
    <>
      {Failed < 1 &&
        addedResultData.map((post) => {
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
