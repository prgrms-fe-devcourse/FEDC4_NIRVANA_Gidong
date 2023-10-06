import type { EditedPost } from '@/types';
import { PostPreview } from '@components/PostPreview';

interface PostItemsProps {
  postsData: EditedPost[];
}

const PostItems = ({ postsData }: PostItemsProps) => {
  return (
    <>
      {postsData.map((post: EditedPost, index) => {
        const { content, likes, comments } = post;
        return (
          content && (
            <PostPreview
              key={index}
              post={post}
              totalLikes={likes.length}
              totalComments={comments.length}
              noneProfile={false}
            />
          )
        );
      })}
    </>
  );
};

export default PostItems;
