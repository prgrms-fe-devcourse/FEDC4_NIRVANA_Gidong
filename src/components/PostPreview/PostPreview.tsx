import type { Post } from '@/types';
import PostHeader from './PostHeader';
import {
  PreviewContainer,
  PostHeaderContainer,
  PostContentContainer,
  PostContent
} from './PostPreview.style';
import { Link } from '@components/Link';

interface PostPreviewProps {
  post: Pick<Post, '_id' | 'image' | 'title' | 'author' | 'createdAt'>;
  totalLikes: number;
  totalComments: number;
  noneProfile: boolean;
}

const PostPreview = ({
  post,
  totalLikes,
  totalComments,
  noneProfile = false
}: PostPreviewProps) => {
  const { title, _id } = post;
  const previewTitle = title.substring(0, 100);

  return (
    <PreviewContainer>
      <PostHeaderContainer>
        <PostHeader
          post={post}
          totalLikes={totalLikes}
          totalComments={totalComments}
          noneProfile={noneProfile}
        />
      </PostHeaderContainer>
      <PostContentContainer>
        <Link
          pageLink={`/posts/${_id}`}
          color='black'>
          <PostContent>{previewTitle}...</PostContent>
        </Link>
      </PostContentContainer>
    </PreviewContainer>
  );
};
export default PostPreview;
